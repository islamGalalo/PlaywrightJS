const { test , expect } = require("@playwright/test")

  test ('login page', async ({ page }) => {
    
  await page.goto('https://rahulshettyacademy.com/client/');
  const userEmail = await page.locator('#userEmail');
  await userEmail.fill('anshika@gmail.com');
  await page.type('#userPassword', 'Iamking@000');
  await page.click('#login');
  await page.click("(//button[@class='btn w-10 rounded'][normalize-space()='Add To Cart'])[3]");
  await page.click("//button[@routerlink='/dashboard/cart']");
  const productName = await page.locator("//h3[normalize-space()='iphone 13 pro']").textContent();
  console.log("product name is :" , productName);
  await expect(productName).toContain("iphone 13 pro")
  await page.click("//button[normalize-space()='Checkout']");
  await page.locator("//input[@class='input txt']" ).nth(0).fill("589");
 // await page.pause();
  await page.locator("//input[@class='input txt']").last().fill("messi galal");
  await page.fill("//input[@name='coupon']", 'rahulshettyacademy');
  await page.click("//button[@type='submit']");
 // await expect("//input[@class='input txt text-validated ng-pristine ng-valid ng-touched']").toEqual("anshika@gmail.com")
  //await page.pause();
  await page.getByPlaceholder('Select Country').type("ind" , {delay:1000});
   const dropdown =  page.locator("//span[normalize-space()='British Indian Ocean Territory']");
  await dropdown.click();
  // let optionCount = await dropdown.locator("button").count();
  // for (let i = 0; i < optionCount; ++i) {
  //    const text = await dropdown.locator("button").nth(i).textContent();
  //       if (text === " India") {
  //         await dropdown.locator("button").nth(i).click();
  //         break;
  //       }    
  await page.click("//a[@class='btnn action__submit ng-star-inserted']");
  

         

 

//  const confirmationText = await page.locator("//h1[@class='hero-primary']").textContent();
//  await expect(confirmationText).toContain("THANKYOU FOR THE ORDER.");
//  const productId = await page.locator("//label[@class='ng-star-inserted']").textContent();
//  await page.click("//label[@routerlink='/dashboard/myorders']");
//  await expect("//th[normalize-space()='6486adcc568c3e9fb184a74c']").toEqual(productId);
//  await page.goBack();
//  await page.click("//button[normalize-space()='Click To Download Order Details in Excel']");



  // test ('add product to cart', async ({page})=> {
  //   await page.goto("https://rahulshettyacademy.com/client/dashboard/dash");
   
})