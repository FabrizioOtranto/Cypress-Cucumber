/// <reference types="cypress" />

export function navigate(url){
    cy.visit(url)
}

export function listOpcion(option){
    cy.get(option)
}

export function shopingcartLink(){
    cy.get('.cart-label').click()
    
}

export function shoppingCartText(quantity){
    const label = cy.get(".cart-qty")
    label.should('have.text',`${quantity}`)
}

export function wishListText(quantity){
    const label = cy.get(".wishlist-qty")
    label.should('have.text',`${quantity}`)
}

export function search(product){
    cy.get("#small-searchterms").type(product)
    cy.get("#ui-id-1 li:nth-child(1)").click()
}