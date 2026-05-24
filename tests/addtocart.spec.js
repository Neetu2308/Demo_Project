import { test,expect } from '@playwright/test'
import { LoginPageDemo } from '../pages/LoginPageDemo'
import { AddtoCartDemo } from '../pages/AddtoCart' 
import userinfo from  '../util/userinfo.json' 
import login_creds from '../util/login_creds.json' 

test('Select mobile',async({page})=>
{

      const loginpage=new LoginPageDemo(page)
      const dialogbox= page.waitForEvent('dialog')
    await loginpage.goto()
    await loginpage.login_action(  login_creds[0].username, login_creds[0].password)
    await expect(page.locator('#nameofuser')) .toContainText('Welcome neetus')
    const addtocart= new AddtoCartDemo(page)
    await addtocart.select_mobile()
    const dialog = await dialogbox
    expect(dialog.message()).toContain('Product added.')
    await dialog.accept()
    

})

test('Select a Monitor',async({page})=>
{

    const loginpage=new LoginPageDemo(page)
    const dialogbox= page.waitForEvent('dialog')
    await loginpage.goto()
   await loginpage.login_action(  login_creds[0].username, login_creds[0].password)
    const addtocart= new AddtoCartDemo(page)
    await addtocart.select_monitor()
    const dialog = await dialogbox
    expect(dialog.message()).toContain('Product added.')
    await dialog.accept()
  
})
