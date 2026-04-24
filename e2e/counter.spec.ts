import { test, expect } from '@playwright/test'

test.describe('Компонент Counter', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('должен отображать начальное значение 0', async ({ page }) => {
    await expect(page.getByText('0')).toBeVisible()
  })

  test('кнопка + должна увеличивать счетчик', async ({ page }) => {
    const plusButton = page.getByText('+')
    await plusButton.click()
    await expect(page.getByText('1')).toBeVisible()
  })

  test('кнопка - должна уменьшать счетчик', async ({ page }) => {
    const minusButton = page.getByText('-')
    await minusButton.click()
    await expect(page.getByText('-1')).toBeVisible()
  })

  test('должен корректно обрабатывать несколько кликов', async ({ page }) => {
    const plusButton = page.getByText('+')
    const minusButton = page.getByText('-')

    await plusButton.click()
    await plusButton.click()
    await plusButton.click()
    await expect(page.getByText('3')).toBeVisible()

    await minusButton.click()
    await expect(page.getByText('2')).toBeVisible()
  })

  test('кнопки должны быть кликабельными', async ({ page }) => {
    const plusButton = page.getByText('+')
    const minusButton = page.getByText('-')

    await expect(plusButton).toBeEnabled()
    await expect(minusButton).toBeEnabled()
  })
})
