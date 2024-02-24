const { navigateTo } = require("../support/page_objects/navigationPage")
const { loginPage } = require("../support/page_objects/loginPage")
const { registrationPage } = require("../support/page_objects/registrationPage")

describe('Tests with page object model', ()=>{

    beforeEach('open app',()=>{
        cy.openHomePage()
    })

    it('verify login page',()=>{
        navigateTo.loginAndRegistrationPage()
        const { email, password }= registrationPage.submitRegistrationForm();   
        registrationPage.logOut() 
        cy.submitLoginForm(email,password)
        loginPage.verifyErrorMessageVisible()          
    })

    it('negative test cases using invalid login credentials',()=>{
        navigateTo.loginAndRegistrationPage()
        loginPage.loginInvalidCredentials()
    })

    it('logout user',()=>{
        navigateTo.loginAndRegistrationPage()
        registrationPage.submitRegistrationForm();   
        registrationPage.logOut()
        loginPage.isUserLogOut()
    })
})