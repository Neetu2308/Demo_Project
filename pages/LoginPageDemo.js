import { AddtoCartDemo } from "./AddtoCartDemo"
export class LoginPageDemo{
    constructor(page)
    {
        this.page=page
        this.login_link=page.locator('#login2')
        this.login_name=page.locator('#loginusername')
        this.login_pwd=page.locator('#loginpassword')
        this.login_button= page.getByRole('button', { name: 'Log in' })
        this.name_of_user = page.locator('#nameofuser')
        this.logout_button=page.locator('#logout2')

    }
    async goto(){
    await this.page.goto('https://www.demoblaze.com/')
    return this
}

    async login_action(username,password){

        await this.login_link.click()
        await this.login_name.fill(username)
        await this.login_pwd.fill(password)
        await this.login_button.click()
          return new AddtoCartDemo(this.page)
    }
    async logout()
    {
       await this.logout_button.click()
    }

    
    

}