const { navigateTo } = require("../support/page_objects/navigationPage")
const { cartPage } = require("../support/page_objects/cartPage")
const { registrationPage } = require("../support/page_objects/registrationPage")

describe('Tests with page object model', ()=>{

    beforeEach('open app',()=>{
        cy.openHomePage()
    })

    it('verify cart page',()=>{
        navigateTo.loginAndRegistrationPage()
        registrationPage.submitRegistrationForm()
        cartPage.putInCart()
        expect(cartPage.isPriceGood()).to.be.true
        expect(cartPage.isCartPayingCorrect()).to.be.true
        cartPage.placeOrder()
        cartPage.isPaymentDone()
     
    })

})