import {test, expect} from '@playwright/test'

let page
let url='https://www.nike.in/'
test.beforeAll('Initialising Browser',async ({browser})=>{
    const context= await browser.newContext()
    page=await context.newPage()
    await page.goto(url)
})

test('Verify Nike page', async ()=>{
    await expect(page).toHaveURL(url)
    let login=await page.locator("//*[normalize-space(text())='Log In']")
    await expect(login).toBeVisible()
    console.log('Successfully launced :',url)

})

test('Verify Nike logo functionality', async () => {
    const logo = page.locator('//a[contains(@aria-label,"logo") or contains(@aria-label,"Home")]');
    const login =  page.locator("//*[normalize-space(text())='Log In']");
    await logo.click()
    await expect(login).toBeVisible();
    console.log('Successfully verified logo functionality');
});

