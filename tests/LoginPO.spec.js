const { test , expect } = require("@playwright/test")

test ('login page', async ({ page }) => {
const loginPage = new loginPage (page);
const userEmail = "anshika@gmail.com" 
const userPass = "Iamking@000"
loginPage.goTo();
loginPage.validLogin(userEmail,userPass);

})
