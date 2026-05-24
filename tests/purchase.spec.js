
import { Purchase } from '../pages/Purchase'
import login_creds from '../util/login_creds.json' 
import userinfo from  '../util/userinfo.json' 
import { test,expect } from '@playwright/test'
import { LoginPageDemo } from '../pages/LoginPageDemo'
import { AddtoCartDemo } from '../pages/AddtoCart' 

test('Purchase a Monitor',async({page})=>
{

    const purchase=new Purchase(page)
   const loginpage=new LoginPageDemo(page)
    const dialogbox= page.waitForEvent('dialog')
    await loginpage.goto()
   await loginpage.login_action(  login_creds[0].username, login_creds[0].password)
    const addtocart= new AddtoCartDemo(page)
    await addtocart.select_monitor()
    const dialog = await dialogbox
    expect(dialog.message()).toContain('Product added.')
    await dialog.accept()
    await purchase.cart()
    await purchase.add_details(userinfo.name,userinfo.country,userinfo.city,userinfo.card,userinfo.month,userinfo.year)
    await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();

  
})
