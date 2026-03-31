import {test,expect} from '@playwright/test'

test.beforeEach('elements clicking',async ({page})=>{
    await page.goto('/');
    await page.locator("//*[text()='Elements']").click();
    console.log( page.url())
    //await expect(page).toHaveURL(process.env.DEMO_URL+'/elements')
    await expect(page).toHaveURL(process.env.DEMO_URL+'elements');
    console.log('We have successfully entered the elements section')
})

test('TextBox',async ({page})=>{
   await  page.locator("(//*[@class='menu-list'])[1]/li",{hasText:'Text Box'}).click()
   await  page.getByPlaceholder("Full Name").fill('Tharun');
   await page.fill("#userEmail","tharun@gmail.com",{timeout:process.env.TIME})
   await page.locator("#currentAddress").fill(process.env.ADDRESS)
   await page.fill("#permanentAddress",process.env.ADDRESS)
   await page.getByRole('button',{role:'submit'}).click();
   await expect(page.locator("#output")).toBeVisible()
   console.log("Successfully verified the Output ")
})

test('CheckBox',async ({page})=>{
    
    await page.getByText('Check Box').click()

    
})