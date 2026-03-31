import {test,expect} from '@playwright/test'
let page;
test.describe.serial('Elements section testing',()=>{
test.beforeAll('elements clicking',async ({browser})=>{
    let context= await browser.newContext();
    page= await context.newPage();
    await page.goto('/');
    await page.locator("//*[text()='Elements']").click();
    await expect(page).toHaveURL(process.env.DEMO_URL +'elements');
    console.log('We have successfully entered the elements section')
})
test.afterAll('terminating the browser',async ({browser})=>{
    await browser.close();
    console.log('We have successfully closed the browser')
})

test('TextBox',async ({})=>{
   await  page.locator("(//*[@class='menu-list'])[1]/li",{hasText:'Text Box'}).click()
   await  page.getByPlaceholder("Full Name").fill('Tharun');
   await page.fill("#userEmail","tharun@gmail.com",{timeout:process.env.TIME})
   await page.locator("#currentAddress").fill(process.env.ADDRESS)
   await page.fill("#permanentAddress",process.env.ADDRESS)
   await page.getByRole('button', { name: 'Submit' }).click();
   await expect(page.locator("#output")).toBeVisible()
   console.log("Successfully verified the Output ")
})

test('CheckBox',async ({})=>{
    
    await page.getByText('Check Box').click();

    
})

})