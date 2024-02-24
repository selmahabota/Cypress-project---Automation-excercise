const faker = require("faker");
const { contactPage } = require("../support/page_objects/contactPage");

describe('Tests for contact form', () => {

    beforeEach('open app',()=>{
        cy.openHomePage()
    })
  
    it('verify contact page', () => {
      contactPage.fillContactForm()
      cy.get('[class="status alert alert-success"]').should('contain','Success! Your details have been submitted successfully.')
      cy.get('[class="contact-form"]').find('h2').should('contain', 'Get In Touch')
    })
  })
  