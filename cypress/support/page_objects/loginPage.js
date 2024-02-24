export class LoginPage{
    
    verifyErrorMessageVisible(){
        cy.contains('Delete Account').should('be.visible');
        cy.contains('Logout').should('be.visible');
    }

    loginInvalidCredentials(email, password){
        cy.fixture('user').then(users => {
            users.forEach(user => {
              cy.submitLoginForm(user.email, user.password);
              cy.url().should('eq', 'https://automationexercise.com/login');
            })
        })
    } 
    isUserLogOut(){
        cy.get('[href="/login"]').should('contain', ' Signup / Login')
        cy.get('[class="col-sm-4 col-sm-offset-1"]').should('be.visible')
        cy.get('[class="signup-form"]').should('be.visible')
    }
}
export const loginPage = new LoginPage()