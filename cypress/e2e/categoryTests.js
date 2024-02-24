import { categoryPage } from "../support/page_objects/CategoryPage"

describe('Tests with page object model', ()=>{

    beforeEach('open app',()=>{
        cy.openHomePage()
    })

    it('verify category page',()=>{
        categoryPage.products()
    })

})