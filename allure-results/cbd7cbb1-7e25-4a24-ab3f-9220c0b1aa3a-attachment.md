# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: addtocartandinfo.spec.js >> Purchase a Monitor
- Location: tests\addtocartandinfo.spec.js:24:5

# Error details

```
ReferenceError: Purchase is not defined
```

# Test source

```ts
  1  | import { test,expect } from '@playwright/test'
  2  | import { LoginPageDemo } from '../pages/LoginPageDemo'
  3  | import { AddtoCartDemo } from '../pages/AddtoCartDemoandEnterInfo' 
  4  | import userinfo from  '../util/userinfo.json' 
  5  | import login_creds from '../util/login_creds.json' 
  6  | 
  7  | test('Select mobile',async({page})=>
  8  | {
  9  | 
  10 |       const loginpage=new LoginPageDemo(page)
  11 |       const dialogbox= page.waitForEvent('dialog')
  12 |     await loginpage.goto()
  13 |     await loginpage.login_action(  login_creds[0].username, login_creds[0].password)
  14 |     await expect(page.locator('#nameofuser')) .toContainText('Welcome neetus')
  15 |     const addtocart= new AddtoCartDemo(page)
  16 |     await addtocart.select_mobile()
  17 |     const dialog = await dialogbox
  18 |     expect(dialog.message()).toContain('Product added.')
  19 |     await dialog.accept()
  20 |     
  21 | 
  22 | })
  23 | 
  24 | test('Purchase a Monitor',async({page})=>
  25 | {
  26 | 
> 27 |     const purchase=new Purchase(page)
     |                    ^ ReferenceError: Purchase is not defined
  28 |     const loginpage=new LoginPageDemo(page)
  29 |     const dialogbox= page.waitForEvent('dialog')
  30 |     await loginpage.goto()
  31 |    await loginpage.login_action(  login_creds[0].username, login_creds[0].password)
  32 |     const addtocart= new AddtoCartDemo(page)
  33 |     await addtocart.select_monitor()
  34 |     const dialog = await dialogbox
  35 |     expect(dialog.message()).toContain('Product added.')
  36 |     await dialog.accept()
  37 |     await purchase.cart()
  38 |     await purchase.add_details(userinfo.name,userinfo.country,userinfo.city,userinfo.card,userinfo.month,userinfo.year)
  39 |     await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();
  40 | 
  41 |   
  42 | })
  43 | 
```