const {test,expect,request} = require('@playwright/test');
const dataPayload = {userEmail: "anshika@gmail.com", userPassword: "Iamking@000"}


test.beforeAll( async()=> {
const apiContext = await request.newContext();
const loginResponse =  await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login")
{
data: dataPayload 
} 

expect (loginResponse.ok()).toBeTruthy();
 const loginResponseJson = loginResponse.json();
 const token = loginResponseJson.token;
})
