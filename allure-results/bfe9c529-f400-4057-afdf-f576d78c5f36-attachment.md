# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: purchase.spec.js >> Purchase a Monitor
- Location: tests\purchase.spec.js:7:5

# Error details

```
ReferenceError: LoginPageDemo is not defined
```

# Test source

```ts
  1  | 
  2  | import { Purchase } from '../pages/Purchase'
  3  | import login_creds from '../util/login_creds.json' 
  4  | import userinfo from  '../util/userinfo.json' 
  5  | import { test,expect } from '@playwright/test'
  6  | 
  7  | test('Purchase a Monitor',async({page})=>
  8  | {
  9  | 
  10 |     const purchase=new Purchase(page)
> 11 |     const loginpage=new LoginPageDemo(page)
     |                     ^ ReferenceError: LoginPageDemo is not defined
  12 |     const dialogbox= page.waitForEvent('dialog')
  13 |     await loginpage.goto()
  14 |    await loginpage.login_action(  login_creds[0].username, login_creds[0].password)
  15 |     const addtocart= new AddtoCartDemo(page)
  16 |     await addtocart.select_monitor()
  17 |     const dialog = await dialogbox
  18 |     expect(dialog.message()).toContain('Product added.')
  19 |     await dialog.accept()
  20 |     await purchase.cart()
  21 |     await purchase.add_details(userinfo.name,userinfo.country,userinfo.city,userinfo.card,userinfo.month,userinfo.year)
  22 |     await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();
  23 | 
  24 |   
  25 | })
  26 | 
```