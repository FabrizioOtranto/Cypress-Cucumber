import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import * as utils from "../../pages/functions/utils"
import {RegisterPage} from "../../pages/registerPage"


const URL = "https://demo.nopcommerce.com/register"
var randonNumber = Math.floor(Math.random()*10000)

const registerPage = new RegisterPage()

    Given('The user opens the registration page', async function () {
        utils.navigate(URL)
    
    });
  
    When('The user selects the {string}, {string}, {string},{string}, {string}, {string}, {string}, and {string}',async  function (gender, firstname, lastname, day, month, year, email, password) {
        registerPage.gender(gender)
        registerPage.firstnameTxt(firstname)
        registerPage.lastnameTxt(lastname)
        registerPage.birthDay(day)
        registerPage.birthMonth(month)
        registerPage.birthYear(year)
        registerPage.emailTxt(email + randonNumber + "@gmail.com")
        registerPage.passwordTxt(password)
        registerPage.confirmPasswordTxt(password)
    });
  
    When('the user clicks register button', async function () {
        registerPage.registerBtn()
      
    });
  
    Then('successfull message is displayed', async function () {
        registerPage.validateRegistration()

  
    });