export class NavigationPage{
    
    loginAndRegistrationPage(){
        cy.get('[href="/login"]').click()
    }
    
}

export const navigateTo = new NavigationPage()