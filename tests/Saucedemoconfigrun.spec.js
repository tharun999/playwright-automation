import{test,expect} from '@playwright/test'
import { TIMEOUT } from 'node:dns';
test(' test storage state',async ({page})=>{
    await page.goto('/inventory.html')
    const cookies=await page.context().cookies();
    console.log('cookies:',cookies)
    await page.reload({ waitUntil:'load',TIMEOUT:process.env.TIME})
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