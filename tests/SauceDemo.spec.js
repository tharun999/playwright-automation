//let{test,expect}=require('@playwright/test');
import {test,expect} from '@playwright/test'

/*test('Verify the Url',async ({page})=>{
    let url='https://www.saucedemo.com/';
    await page.goto(url);
    await expect(page).toHaveURL(url);
    console.log('Page url is : ' , await page.url());
    await expect(page).toHaveTitle('Swag Labs');
    console.log('we successfully loaded the Page');
})*/

test('Veirfy login page',async  ({page})=>{
    console.log('Trying to verify login page')
    let url='https://www.saucedemo.com/'
    await page.goto(url)
    await page.fill('id=password','secret_sauce')
    await page.locator('id=user-name').fill('standard_user')// await page.click('locator');
    await page.click("//*[@value='Login']")
    let applogo=await page.locator("//*[@class='app_logo']")
    await expect(applogo).toBeVisible()
    const links=await page.$$("//*[@class='inventory_item_label']/a")
    for(let link of links){
        let text=await link.textContent();
        console.log(text)
        if(text.includes('Jacket')){
            await page.click("//*[text()='"+text+"']");
            let backcmp=await page.locator("//*[@class='left_component']")
            await expect(backcmp).toBeVisible();
            console.log('Successfully clicked on expected link:',text);
            break;
        }else{
            console.log('Couldnt find the expected link ,so trying to search again')
            continue
        }

    }
    await page.close()

})