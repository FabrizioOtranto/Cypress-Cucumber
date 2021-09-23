import {Given, When, Then,Before,After} from "cypress-cucumber-preprocessor/steps"
import * as utils from "../../pages/functions/utils"
import { LogInPage } from "../../pages/loginPage"
import { HomePage } from "../../pages/homePage"

const Login = new LogInPage()
const homePage = new HomePage()


Before(function(scenario){
    cy.eyesOpen({
        appName: "Cypress-Cucumber-Login",
        batchName: "Cypress-Cucumber-Login",
    })
  });

  After(function() {
      cy.eyesClose()
    })

Given("The user is on the login page", () => {
    utils.navigate("https://demo.nopcommerce.com/login")
})

When('The user enters the {string} and {string}', (email, password) =>{
    Login.emailTxt(email)
    Login.passwordTxt(password)
})

When('The user clicks on the login button',() =>{
    Login.logInBtn()
})

Then('The user is redirected to home page', () =>{
    cy.eyesCheckWindow()

})