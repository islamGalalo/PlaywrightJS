class loginPage {
  constructor(page) {
    this.page = page;
    this.userEmail = page.locator("#userEmail");
    this.userPass = page.locator("#userPassword");
    this.clicklogn = page.locator("#login");
  }
  async goTo(page) {
    await this.page.goTo("https://rahulshettyacademy.com/client");
  }

  async validLogin(username, password) {
    await this.userEmail.fill(username);
    await this.userPass.fill(password);
    await this.clicklogn.click();
  }
}
module.exports = { loginPage };
