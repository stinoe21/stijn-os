import puppeteer from 'puppeteer-core'
import { mkdirSync } from 'node:fs'

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe'
const URL = process.env.SHOT_URL || 'http://localhost:4173/stijn-os/'
mkdirSync('.shots', { recursive: true })

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--force-color-profile=srgb'],
})

async function shot(name, width, height, openLabels = [], closeAll = false, scroll = false) {
  const page = await browser.newPage()
  await page.setViewport({ width, height, deviceScaleFactor: 1 })
  await page.goto(URL, { waitUntil: 'networkidle2' })
  await sleep(3500) // boot + auto-open README
  if (closeAll) {
    await page.evaluate(() => {
      document
        .querySelectorAll('button[aria-label="Venster sluiten"]')
        .forEach((b) => b.click())
    })
    await sleep(300)
  }
  for (const label of openLabels) {
    await page.evaluate((l) => {
      const btn = [...document.querySelectorAll('button')].find((b) => b.textContent?.includes(l))
      btn?.click()
    }, label)
    await sleep(450)
  }
  if (scroll) {
    await page.evaluate(() => {
      document.querySelectorAll('.window-scroll').forEach((el) => (el.scrollTop = 99999))
    })
    await sleep(500)
  }
  await page.screenshot({ path: `.shots/${name}.png` })
  await page.close()
  console.log('saved', name)
}

await shot('m-keynote-top', 390, 1500, ['Keynote.exe'])
await shot('m-keynote-bot', 390, 1500, ['Keynote.exe'], false, true)

await browser.close()
console.log('done')
