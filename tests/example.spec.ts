import { test, expect } from '@playwright/test';
import {productListingPage} from '../pages/product/productListingPage'

test.only('visit the product listing page', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  let sampleObj = {
    "name": "abc",
    "shortDescription": "efg",
    "price": "100",
    "description": "sample desc",
  }

  const sample = new productListingPage(page, sampleObj);

  sample.goto();
  sample.printproductDetails();
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
