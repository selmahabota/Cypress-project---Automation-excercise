export class CategoryPage{
    products(){
        let categoryProducts
        let allProducts
        cy.get('[class="features_items"]').find('[class="col-sm-4"]').then(elements=>{
            allProducts=elements.length
        })
        cy.get('[class="nav nav-pills nav-stacked"]').find('li').then(elements=>{
            const randomIndex = Math.floor(Math.random() * elements.length)
            cy.wrap(elements[randomIndex]).click()
        })
        cy.get('[class="features_items"]').find('[class="col-sm-4"]').then(elements=>{
            categoryProducts=elements.length
            expect(categoryProducts).to.be.lessThan(allProducts)
        })
    }
}
export const categoryPage = new CategoryPage()