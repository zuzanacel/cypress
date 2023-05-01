describe('Final Project 2', () => {

    it('Return ticket and amount check', () => {
  
      //login
      cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
      cy.get("#product_550").click()

      //fill customer details
      cy.get("#travname").type("Bob")
      cy.get("#travlastname").type("Cool")
      //date of birth
      cy.get("#dob").click()
      cy.get('.ui-datepicker-year').select("2000")
      cy.get('.ui-datepicker-month').select("Apr")
      cy.get('.ui-datepicker-calendar')
      cy.xpath("//a[normalize-space()='13']").click()

      cy.get("#sex_1").click()
      cy.get("#traveltype_1").click()
      cy.get("#billing_phone").type("0011234567")
      cy.get("#billing_email").type("bob@email.cz")
      cy.get("#billing_address_1").type("Test 1")
      cy.get("#billing_city").type("Brno")

      //fill the country
      cy.get('#select2-billing_country-container').type('Czech Republic')
      cy.get("#select2-billing_country-results").click()

      //check text and value
      cy.xpath("//div[@class='product-details']").should("have.have.text","\n\t\t\t\t\t\t\t\t\tDummy return ticket\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")
      cy.xpath("//tr[@class='order-total']//span[@class='woocommerce-Price-amount amount']").should("include.text","$15.00")



      
    })
  
  })