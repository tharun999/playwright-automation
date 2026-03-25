let {test,expect} = require('@playwright/test')
//we are importing the modules reuired from node_module  and we are stroing it in variables uisng let ot const
// string ,annonymous function ()=> and 
// we need to pass page to annonymous funtion as it contains all the commands 
// we need add async  before annoymous function and await before page commands
// all steps are executed in paralell and none of those are depended on each other  in JS so we need to use async and await

test('verify Home page',async ({page})=>{
    let url='https://www.saucedemo.com/';
    await page.goto(url);
    const pg_title= await page.title();
    console.log('page title',pg_title);
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page).toHaveURL(url);
    console.log('Successfully validated Title and url',page.url());
    await page.close();
})

