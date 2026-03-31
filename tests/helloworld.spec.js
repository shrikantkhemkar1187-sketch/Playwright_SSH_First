const {test, expect} = require('@playwright/test')

test ( 'TC for google login', async ({page})=>{

    await page.goto("https://www.google.com/")

    console.log("Hello world! The google page is opend successfully.")
})
