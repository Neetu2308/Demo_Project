import { test,expect } from '@playwright/test'
import { LoginPageDemo } from '../pages/LoginPageDemo'
import login_creds from '../util/login_creds.json' 

test('login using valid cred ', async ({ page }) => 
{
    const loginpage = new LoginPageDemo(page)
    await loginpage.goto()
    const username = login_creds[0].username
    await loginpage.login_action(  login_creds[0].username, login_creds[0].password)
})
   
test ('Login using valid username and inavlid password',async({page})=>
{
    const loginpage=new LoginPageDemo(page)
    await loginpage.goto()
    const dialogbox= page.waitForEvent('dialog')
     await loginpage.login_action(  login_creds[1].username, login_creds[1].password)
    const dialog = await dialogbox
    expect(dialog.message()).toContain('Wrong password.')
    await dialog.accept()
})
test ('Login using invalid username and valid password',async({page})=>
{
    const loginpage=new LoginPageDemo(page)
    await loginpage.goto()
    const dialogbox= page.waitForEvent('dialog')
     await loginpage.login_action(  login_creds[2].username, login_creds[2].password)
    const dialog = await dialogbox
    expect(dialog.message()).toContain('User does not exist.')
    await dialog.accept()
})
test ('Login using invalid username and invalid password',async({page})=>
{
    const loginpage=new LoginPageDemo(page)
    await loginpage.goto()
    const dialogbox= page.waitForEvent('dialog')
     await loginpage.login_action(  login_creds[3].username, login_creds[3].password)
    const dialog = await dialogbox
    expect(dialog.message()).toContain('User does not exist.')
    await dialog.accept()
})
