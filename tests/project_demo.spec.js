import { test,expect } from '@playwright/test'
import { SignUpPageDemo } from '../pages/SignUpPageDemo'
import { LoginPageDemo } from '../pages/LoginPageDemo'
import { AddtoCartDemo } from '../pages/AddtoCartDemo' 
import { Purchase } from '../pages/PurchaseDemo'
import signupinfo from '../util/signup.json' 
import userinfo from  '../util/userinfo.json' 
import login_creds from '../util/login_creds.json' 


test ('SignUp' ,async({page})=>
{

    const signupage=new SignUpPageDemo(page)

    await signupage.goto()
    await signupage.sig(signupinfo.username,signupinfo.password)


})
test ('Sign up and Close',async({page})=>
{
        const signupage=new SignUpPageDemo(page)
        //await signupage.sig(signupinfo.username,signupinfo.password)
    await signupage.goto()

        await signupage.close_signup(signupinfo.username,signupinfo.password)


})

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

test ('Logout', async({page})=>
{
    const loginpage=new LoginPageDemo(page)
    await loginpage.goto()
     await loginpage.login_action(validcreds.username,validcreds.password)
    await expect(page.locator('#nameofuser')) .toContainText('Welcome neetus')
    await loginpage.logout()
    await expect(page.locator('#login2')).toHaveText('Log in')

})
  