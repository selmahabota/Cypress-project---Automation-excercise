import faker from 'faker';
export class ContactPage{
    fillContactForm(){
        const filePath = 'output.txt';
        const content = 'hello this is content of file';

        cy.writeFile('cypress/fixtures/' + filePath, content);

        cy.readFile('cypress/fixtures/'+filePath).should('equal', content);

        cy.get('[href="/contact_us"]').click()
        cy.get('[data-qa="name"]').type(faker.name.findName())
        cy.get('[data-qa="email"]').type(faker.internet.email())
        cy.get('[data-qa="subject"]').type('Subject')
        cy.get('[data-qa="message"]').type(faker.name.findName()+ " " + faker.address.streetAddress())

        cy.get('[name="upload_file"]').attachFile('output.txt')
        cy.get('[data-qa="submit-button"]').click()
    }
}
export const contactPage = new ContactPage()