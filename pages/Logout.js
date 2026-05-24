export class LoginPageDemo{
    constructor(page)
    {
   
        this.logout_button=page.locator('#logout2')

    }

    async logout()
    {
       await this.logout_button.click()
    }

    
    

}