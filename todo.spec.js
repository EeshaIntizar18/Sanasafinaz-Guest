/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
})
describe('EGO shoes', () => {
  context('720p resolution', () => {
    beforeEach(() => {
      // run these tests as if in a desktop
      // browser with a 720p monitor
      cy.viewport(1440, 1220)
    })

it('Open url', () => {
  // Cypress starts out with a blank slate for each test
  // so we must tell it to visit our website with the `cy.visit()` command.
  // Since we want to visit the same URL at the start of all our tests,
  // we include it in our beforeEach function so that it runs before each test
  cy.visit('http://staging.sanasafinaz.com/')
  cy.wait(6000)

  //Close ad
  cy.get('#nl_close_btn').click({force:true})
  cy.wait(2000)

  //Click on account button
  cy.get('#html-body > div.page-wrapper > header > div > div > div.header-right > div.tm_headerlinkmenu.toggle > div > div').click({force:true})
  cy.wait(2000)

  //Click on signin
  cy.get('#html-body > div.page-wrapper > header > div > div > div.header-right > div.tm_headerlinkmenu.toggle > div > div > div.tm_headerlinks > div > ul > li.link.authorization-link > a').click({force:true})
  cy.wait(2000)

  //Enter email
  cy.get('input[name="login[username]"]').type('esha.intizar@rltsquare.com',{force:true})
  cy.wait(1000)

  //Enter Pass
  cy.get('input[name="login[password]"]').type('@eesha1234')
  cy.wait(1000)

  //Click on sigin button
  cy.get('[name="send"]').click({ multiple: true ,force: true })
  cy.wait(3000)

  //Click on search
  cy.get('#search_mini_form > div.search-open').click({force:true})
  cy.wait(2000)

  //Enter clothing
  cy.get('#search').type('tops{enter}',{force:true})
  cy.wait(1000)

  //Click on Product
  cy.get('#maincontent > div > div.column.main > div.search.results > div.products.wrapper.grid.products-grid > ol > li:nth-child(1) > div > div > strong > a').click({ multiple: true ,force: true })
  cy.wait(6000)

  // //Click on size
  // cy.get('#option-label-size-580-item-913').click({ multiple: true ,force: true })
  // cy.wait(3000)

  //Change Quantity
  cy.get('#product_addtocart_form > div.product-options-bottom > div > div > div.field.qty > div > div > input.qty-increase').click({ multiple: true ,force: true })
cy.wait(5000)

//Click on add to cart button
cy.get('#product-addtocart-button > span').click({ multiple: true ,force: true })
cy.wait(5000)

//Click on viewbag
cy.get('#html-body > div.page-wrapper > header > div > div > div.header-right > div.minicart-wrapper > a').click({ multiple: true ,force: true })
cy.wait(2000)  

//Changing quantity
cy.get('[data-role="cart-item-qty"]').clear().type('5',{ multiple: true ,force: true })
cy.wait(2000) 

//Click on proceed to checkout
cy.get('#maincontent > div > div > div.cart-container > div.cart-summary > ul > li > button').click({ multiple: true ,force: true })
cy.wait(8000)

//click on email
cy.get('#customer-email').type('usman.ali@rltsquare.com',{force: true })
cy.wait(3000)

 //Enter firstname
 cy.get('[name=firstname]').eq(0).type("test",{ multiple: true ,force: true })
 cy.wait(2000)

 //Enter lastname
cy.get('[name=lastname]').eq(0).type("test",{ multiple: true ,force: true })
cy.wait(2000)
cy.scrollTo(0, 250) // Scroll the window 500px down

//Enter Address
cy.get('input[name="street[0]"]').click({ multiple: true ,force: true }).type('JOHAR TOWN')
 cy.wait(2000)


  // //Select country
  // cy.get('select').eq(0).select('GB')
  // cy.wait(4000)

  // //Select Province
  // cy.get('[name=region]').eq(0).type('Punjab',{ multiple: true,force: true  })
  // cy.wait(3000)
  
  //Select Province
  cy.get('[name=region_id]').eq(0).select('1609')
  cy.wait(4000)
  cy.scrollTo(0, 250) // Scroll the window 500px down
  

  // //Enter city
  // cy.get('[name=city]').eq(0).type('Lahore',{ multiple: true,force: true  })
  // cy.wait(3000)

//Click on City dropdown
cy.get('*[class^="select2-selection__rendered"]').eq(0).click({multiple: true,force: true })
  cy.wait(4000)

//Select city
 cy.get('*[class^="select2-search__field"]').type('attock{enter}')
 cy.wait(2000)

   //Enter zip
   cy.get('[name=postcode]').eq(0).type('61010',{ multiple: true,force: true  })
   cy.wait(3000)

    //Enter Phone
cy.get('[name=telephone]').eq(0).type('3214214211',{ multiple: true,force: true })
cy.wait(2000)

//Click on next button
cy.get('#shipping-method-buttons-container > div > button').click({ multiple: true,force: true })
cy.wait(2000)

//Click on COD 
cy.get('input[name="payment[method]"]').click({ multiple: true,force: true })
cy.wait(3000)

// //Click on payement method
// cy.get('#hbl_pay').click({ multiple: true,force: true })
// cy.wait(2000)

//Click on Place order
cy.get('#checkout-payment-method-load > div > div > div.payment-method._active > div.payment-method-content > div.actions-toolbar > div > button').click({ multiple: true,force: true })
cy.wait(5000)

})
})
})
