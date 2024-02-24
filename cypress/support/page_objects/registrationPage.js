
import faker from 'faker';

export class RegistrationPage{
    submitRegistrationForm(){
        let username = faker.name.firstName()
        let email = faker.internet.email()
        let password = faker.internet.password()
        cy.get('[data-qa="signup-name"]').type(username)
        cy.get('[data-qa="signup-email"]').type(email)
        cy.get('[data-qa="signup-button"]').click()
        cy.get("#uniform-id_gender1").click()
        cy.get("#password").type(password)
        cy.get("#days").select('15')
        cy.get("#months").select('March')
        cy.get("#years").select('1994')
        cy.get("#newsletter").check()
        cy.get("#optin").check()
        cy.get("#first_name").type(username)
        cy.get("#last_name").type(faker.name.lastName())
        cy.get("#company").type(faker.name.findName())
        cy.get("#address1").type(faker.address.streetAddress())
        cy.get("#address2").type(faker.address.streetAddress())
        cy.get("#country").select('India')
        cy.get('#state').type(faker.address.state())
        cy.get("#city").type(faker.address.city())
        cy.get("#zipcode").type(faker.address.zipCode())
        const min = 10000000
        const max = 99999999
        cy.get("#mobile_number").type(faker.random.number({ min, max }))
        cy.contains('Create Account').click()
        return {
            email,
            password
        }
    }

    isUserRegistered(){
        cy.get('[data-qa="account-created"]').should('contain','Account Created!')
        cy.get('[class="col-sm-9 col-sm-offset-1"]').find('p').eq(0).should('contain','Congratulations! Your new account has been successfully created!')
    }

    logOut(){
        cy.get('[href="/login"]').click()
        cy.get('[href="/logout"]').click()

    }
}
export const registrationPage = new RegistrationPage()