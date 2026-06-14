import puppeteer from 'puppeteer-core'
import { mkdirSync } from 'node:fs'

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe'
const URL = 'http://localhost:4173/stijn-os/'
mkdirSync('.shots', { recursive: true })

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--force-color-profile=srgb'],
})

async function shot(name, width, height, openLabels = [], closeAll = false) {
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
  await page.screenshot({ path: `.shots/${name}.png` })
  await page.close()
  console.log('saved', name)
}

await shot('desktop', 1366, 850, [], true)
await shot('detail', 1366, 850, ['Vertaler.app', 'CTO.exe'])
await shot('mobile', 390, 844, ['Vertaler.app'])
await shot('mobile-home', 390, 844, [], true)

await browser.close()
console.log('done')
