import { test,expect } from '@playwright/test'
import { SignUpPageDemo } from '../pages/SignUpPageDemo'
import signupinfo from '../util/signup.json' 
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