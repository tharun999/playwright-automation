import {test, expect} from '@playwright/test'
/*
These are the recommended built-in locators.

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/
test('Built in locators',async ({page})=>{
    const sauceContext = await browser.newContext({ storageState: 'state-sauce.json' });
    page= await sauceContext.newPage();
    await page.goto('https://www.saucedemo.com/')
    //const logo= await page.getByAltText('Nike').first()
    //await expect(logo).toBeVisible()
    //await page.getByRole('textbox',{name:'Username'}).fill('standard_user')
    await page.waitForLoadState('domcontentloaded')
    await page.waitForLoadState('load')

    // load : its a complete load of the website like images, scripts,css(slow)
//domcontentload: it is a partial load only for dom and  html load (faster and recommended)
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByRole('button',{type:'submit'}).click()
    await page.context().storageState({path:'state.json'})
})

test ('',async ({page})=>{
    test.use({storageState:'state.json'})
    await page.getByText('Swag Labs').toBeVisible
    await page.click('#shopping_cart_container')
    let cart_locator=await page.locator("//*[@class='title']")
    expect(cart_locator).toBeVisible()

})