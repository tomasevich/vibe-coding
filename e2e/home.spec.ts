import { test, expect } from '@playwright/test'

test.describe('Главная страница', () => {
  test('должен отображать заголовок', async ({ page }) => {
    await page.goto('/')
    const heading = page.getByRole('heading', { name: 'Вайб кодинг' })
    await expect(heading).toBeVisible()
  })

  test('должен отображать описание проекта', async ({ page }) => {
    await page.goto('/')
    const description = page.getByText(/Репозиторий для тестирования/)
    await expect(description).toBeVisible()
  })

  test('должен содержать ссылку на Kodacode', async ({ page }) => {
    await page.goto('/')
    const link = page.getByRole('link', { name: 'Kodacode' })
    await expect(link).toBeVisible()
    await expect(link).toHaveAttribute('href', 'https://kodacode.ru')
  })

  test('должен отображать компонент счетчика', async ({ page }) => {
    await page.goto('/')
    const counterHeading = page.getByRole('heading', { name: 'Счетчик' })
    await expect(counterHeading).toBeVisible()
    const initialCount = page.getByText('0')
    await expect(initialCount).toBeVisible()
  })

  test('счетчик должен работать корректно', async ({ page }) => {
    await page.goto('/')
    const plusButton = page.getByText('+')
    const minusButton = page.getByText('-')

    await plusButton.click()
    await expect(page.getByText('1')).toBeVisible()

    await plusButton.click()
    await expect(page.getByText('2')).toBeVisible()

    await minusButton.click()
    await expect(page.getByText('1')).toBeVisible()
  })
})
