const { navigateTo } = require("../support/page_objects/navigationPage")
const { registrationPage } = require("../support/page_objects/registrationPage")


describe('Tests with page object model', ()=>{

    beforeEach('open app',()=>{
        cy.openHomePage()
    })
    it('verify registration page',()=>{
        navigateTo.loginAndRegistrationPage()
        registrationPage.submitRegistrationForm()
        registrationPage.isUserRegistered()
    })
})