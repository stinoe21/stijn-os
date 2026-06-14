import puppeteer from 'puppeteer-core'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe'
const htmlPath = resolve('docs/ontwikkelcanvas-v2/index.html')
const url = pathToFileURL(htmlPath).href
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--force-color-profile=srgb'],
})
const page = await browser.newPage()
await page.goto(url, { waitUntil: 'networkidle2' })
await sleep(800) // fonts

await page.pdf({
  path: 'docs/ontwikkelcanvas-v2/Ontwikkelcanvas-Stijn-Smit-v2.pdf',
  printBackground: true,
  preferCSSPageSize: true,
})

// PNG-preview (A4 landscape verhouding) ter controle
await page.setViewport({ width: 1485, height: 1050, deviceScaleFactor: 1 })
await page.screenshot({ path: '.shots/canvas-v2.png', fullPage: true })

await browser.close()
console.log('done')
