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

    test('TextBox',async ()=>{
    await  page.locator("(//*[@class='menu-list'])[1]/li",{hasText:'Text Box'}).click()
    await  page.getByPlaceholder("Full Name").fill('Tharun');
    await page.fill("#userEmail","tharun@gmail.com",{timeout:process.env.TIME})
    await page.locator("#currentAddress").fill(process.env.ADDRESS)
    await page.fill("#permanentAddress",process.env.ADDRESS)
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.locator("#output")).toBeVisible()
    console.log("Successfully verified the Output ")
    })

    test('Radio Button',async ()=>{
        
        await page.getByText('Radio Button').click();
        await page.locator('#yesRadio').click();
        await  expect(page.locator('.text-success')).toHaveText('Yes');
        console.log('Successfully verified the Yes Radio Button')
        await page.locator('#impressiveRadio').click();
        await expect(page.locator('.text-success')).toHaveText('Impressive');
        console.log('Successfully verified the Impressive Radio Button')
        await expect(page.locator('#noRadio')).toBeDisabled();
        console.log('Successfully verified the No Radio Button is disabled')
    })
    test('Buttons test',async()=>{
    await page.getByText('Buttons').click();
    await page.locator('#doubleClickBtn').dblclick();
    await expect(page.locator('#doubleClickMessage')).toBeVisible();
    console.log('Successfully verified the Double Click Button')
    await page.locator('#rightClickBtn').click({button:'right'});
    await expect(page.locator('#rightClickMessage')).toBeVisible();
    console.log('Successfully verified the Right Click Button')
    await page.getByRole('button',{name:'Click Me', exact:true}).click();
    await expect(page.locator('#dynamicClickMessage')).toBeVisible();
    console.log('Successfully verified the Dynamic Click Button')
})

})

