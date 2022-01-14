/// <reference types = "cypress"/>
 
beforeEach(() => {

    cy.fixture('mystore.json').then( function(datos) {
        this.store = datos
        cy.visit(this.store.url)
    })

})

describe('Elementos básicos de la página de inicio', function() {
    it('Logo de la parte superior siempre sea visible', function() {
        cy.get('.logo').should('be.visible')
    })

    it('Caja de búsqueda sea visible', function() {
        cy.get('#search_query_top').should('be.visible')
    })

    it('imagen "70% off" sea visible', function() {
        cy.get('.row > a > .img-responsive').should('be.visible')
    })

    it('El número telefónico que se muestra sea "0123-456-789"', function() {
        cy.get('.shop-phone').contains('0123-456-789')
    })

    it('Al hacer clic en el botón "Sign in" se abra la página de autenticación y que el título de esa página sea "Login - My Store"', function() {
        cy.get('.login').click()
        cy.title().should('eq', 'Login - My Store')
    })
})

describe.only('Compra de un artículo', function() {
    it('Buscar el artículo "Faded Short Sleeve T-shirts"', function() {
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container')
        .should('be.visible')
        .contains('Faded Short Sleeve T-shirts')
        .click
    })

    it('La imagen del artículo es visible', function() {
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x')
        .should('be.visible')
        .click()
        cy.get('#bigpic').should('be.visible')
        cy.get('#thumb_1').should('be.visible')
    })

    it('El precio del artículo es $16.51', function() {
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .content_price > .price')
        .contains('$16.51')
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > h5 > .product-name')
        .click()
        cy.get('#our_price_display').contains('$16.51')
    })

    it('Agregar el artículo al carro de compras y proceder al checkout desde la página de inicio', function() {
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span')
        .click()
        cy.get('#layer_cart')
        .should('be.visible')
        .contains('Product successfully added to your shopping cart')
        cy.get('.button-medium > span')
        .click()
        cy.title().should('eq', 'Order - My Store')
    })

    it('Agregar el artículo al carro de compras y proceder al checkout desde el artículo', function() {
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > h5 > .product-name')
        .click()
        cy.get('.exclusive > span')
        .click()
        cy.get('#layer_cart')
        .should('be.visible')
        .contains('Product successfully added to your shopping cart')
        cy.get('.button-medium > span')
        .click()
        cy.title().should('eq', 'Order - My Store')
    })

    it('EL precio total con impuestos es de $18.51', function() {
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span')
        .click()
        cy.get('.button-medium > span')
        .click()
        cy.get('#total_price_container')
        .contains('$18.51')
    })
})