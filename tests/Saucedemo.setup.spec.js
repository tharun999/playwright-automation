import {test,expect} from '@playwright/test'
test.use({storageState:undefined})

test('login and save session',async ({page})=>{

    await page.goto('/')
    await page.fill('id=password','secret_sauce')
    await page.locator('id=user-name').fill('standard_user')// await page.click('locator');
    await page.click("//*[@value='Login']")
    let applogo=await page.locator("//*[@class='app_logo']")
    await expect(applogo).toBeVisible()
    await expect(page).toHaveURL(/.*inventory.html/);
    page.context().storageState({ path: 'state-sauce.json' })
    
    console.log('✅ Storage state saved!');


})