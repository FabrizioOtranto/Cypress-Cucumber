import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import { ProductPage } from "../../pages/productPage";
import * as utils from "../../pages/functions/utils"

const URL = "https://demo.nopcommerce.com/"

const productPage = new ProductPage()


Given('The user is in the home page', async function () {
    utils.navigate(URL)

});

When('The user searchs for a {string}', (product) =>{
    utils.search(product)

})


Then('The user can verify its {string}, {string} and {string}', (title, description, price) =>{
    productPage.validateTitle(title)
    productPage.validateDescription(description)
    productPage.validatePrice(price)
})