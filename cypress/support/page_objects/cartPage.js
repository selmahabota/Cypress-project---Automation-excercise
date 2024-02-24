import faker from "faker"

export class CartPage{
    putInCart(){
        cy.contains('Continue').click()
        for (let i = 0; i < 2; i++) {
            cy.get('[class="features_items"]').find('[class="productinfo text-center"]').find('[data-product-id="1"]').click()
            cy.get('[class="btn btn-success close-modal btn-block"]').click()
            cy.get('[class="features_items"]').find('[class="productinfo text-center"]').find('[data-product-id="8"]').click()
            cy.get('[class="btn btn-success close-modal btn-block"]').click()
        }
        cy.get('ul').find('[href="/view_cart"]').click()
    }
    isPriceGood(){
        let value=true
        cy.get('tbody').find('tr').each((item) => {
                const price = parseFloat(item.find('[class="cart_price"]').find('p').text().replace(/\D/g, ''))
                const quantity = parseInt(item.find('button').text())
                const totalPrice = parseFloat(item.find('[class="cart_total_price"]').text().trim().replace(/\D/g, ''))
                const product = price*quantity
                if (product===totalPrice) value=true
        })
        return value
    }
    isCartPayingCorrect(){
        cy.contains('Proceed To Checkout').click()
        let value = true;
        let sum = 0;
        let lastItem;
        
        cy.get('tbody').find('tr').each((item, index, list) => {
            const totalPrice = parseFloat(item.find('[class="cart_total_price"]').text().trim().replace(/\D/g, ''));
            if (index < list.length - 1) {
                sum += totalPrice;
            } 
            else {
                lastItem = totalPrice;
                value = sum === lastItem;
            }
        })
        return value
    }
    placeOrder(){
        cy.contains('Place Order').click()
        cy.get('[name="name_on_card"]').type(faker.name.findName())
        cy.get('[name="card_number"]').type(faker.random.number({ min: 1000000000000000, max: 9999999999999999 }))
        cy.get('[name="cvc"]').type(faker.random.number({min:100, max:999}))
        cy.get('[name="expiry_month"]').type('001')
        cy.get('[name="expiry_year"]').type('2025')
        cy.get('#submit').click()
    }
    isPaymentDone() {
        cy.get('[class="title text-center"]').find('b').then(label=>{
            const labelText=label.text()
            expect(labelText).to.eql('Order Placed!')
        })
        cy.get('[class="col-sm-9 col-sm-offset-1"]').find('p').then(label=>{
            const labelText=label.text()
            expect(labelText).to.eql('Congratulations! Your order has been confirmed!')
        })
    }

}
export const cartPage = new CartPage()