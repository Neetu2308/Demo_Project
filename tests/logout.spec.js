import { test,expect } from '@playwright/test'
import { LoginPageDemo } from '../pages/LoginPageDemo'
import login_creds from '../util/login_creds.json' 
import {Logout} from '../pages/Logout'
test ('Logout', async({page})=>
{
    const loginpage=new LoginPageDemo(page)
    await loginpage.goto()
    await loginpage.login_action(  login_creds[0].username, login_creds[0].password)
    await expect(page.locator('#nameofuser')) .toContainText('Welcome neetus')
    await loginpage.logout()
    await expect(page.locator('#login2')).toHaveText('Log in')

})
  