import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import * as utils from "../../pages/functions/utils"
import { LogInPage } from "../../pages/loginPage"
import { HomePage } from "../../pages/homePage"

const Login = new LogInPage()
const homePage = new HomePage()

Given("The user is on the login page", () => {
    utils.navigate("https://demo.nopcommerce.com/login")
})

When('The user enters the {string} and {string}', (email, password) =>{
    Login.emailTxt(email)
    Login.passwordTxt(password)
})

When('the user clicks on the login button',() =>{
    Login.logInBtn()
})

Then('A successfull message is displayed', () =>{
   homePage.validateTitle()

})