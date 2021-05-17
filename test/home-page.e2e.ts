import type { Browser, Page } from 'playwright'

const { chromium } = require('playwright')

jest.setTimeout(35e3)

let browser: Browser
let page: Page
beforeAll(async () => {
  browser = await chromium.launch({ headless: !!process.env.CI })
  page = await browser.newPage()
})

afterAll(async () => {
  await browser.close()
})

describe('Home page', () => {
  test('As a client I want to be able to add products to cart', async () => {
    await page.goto('http://localhost:3000')

    await page.click('text=Ver produtos')
    await page.waitForURL(/\/produtos/g)
    await page.click('text=Adicionar')
    await page.waitForSelector('.cart-item')
  })
})

export {}