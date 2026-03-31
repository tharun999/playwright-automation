import {test,expect} from '@playwright/test'
test.use({storageState:undefined})

test('login and save session',async ({page})=>{

    await console.log('url:',process.env.SAUCE_URL);
    await page.goto('/')
    await page.fill('id=password',process.env.PASSWORD)
    await page.locator('id=user-name').fill(process.env.USERNAME)// await page.click('locator');
    await page.click("//*[@value='Login']")
    let applogo=await page.locator("//*[@class='app_logo']")
    await expect(applogo).toBeVisible()
    await expect(page).toHaveURL(/.*inventory.html/);
    await page.context().storageState({ path: 'state-sauce.json' })
    
    console.log('✅ Storage state saved!');


})