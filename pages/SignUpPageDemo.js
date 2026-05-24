export class SignUpPageDemo{
  
//export is given to use all the elements in test class
constructor(page){
    this.page=page //this.page is the ppty of this class
    this.signup=page.locator("//a[@id='signin2']")
    this. username=page.locator("//input[@id='sign-username']")
    this.password=page.locator("//input[@id='sign-password']")
    this.signup_button=page.getByRole('button', { name: 'Sign up' })
    this.close= page.locator('#signInModal .btn-secondary')


}
async goto(){
    await this.page.goto('https://www.demoblaze.com/')
    return this
}
async sig(user,pass)
{
    await this.signup.click()
    await this.username.fill(user)
    await this.password.fill(pass)
    await this.signup_button.click()
}
async close_signup(username,password)
{
    await this.signup.click()
    await this.username.fill(username)
    await this.password.fill(password)
    await this.close.click()
}
}