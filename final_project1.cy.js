describe('Final Project 1', () => {

    it('Login and transaction', () => {
  
      //login
      cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")
      cy.get('.borderM > :nth-child(1) > .btn').click()
      cy.get('#userSelect').select('Harry Potter') 
      cy.get('form.ng-valid > .btn').click()
      cy.get('.fontBig').should('have.text', 'Harry Potter')

      //deposit
      cy.get('[ng-class="btnClass2"]').click()
      cy.get('.form-control').type('500')
      cy.get('.btn-default').click()
      cy.get('.borderM > :nth-child(3) > :nth-child(2)').should('have.text', '500')
      cy.wait(1000)

      //transaction
      cy.get(".btn.btn-lg.tab[ng-class='btnClass1']").click()
      cy.xpath("//td[contains(text(),'500')]").should('have.text', '500')

      //Withdrawl
      cy.xpath("//button[contains(text(),'Back')]").click()
      cy.xpath("//body/div[1]/div[1]/div[2]/div[1]/div[3]/button[3]").click()
      cy.xpath("//body/div[1]/div[1]/div[2]/div[1]/div[4]/div[1]/form[1]/div[1]/input[1]").type('200')
      cy.xpath("//body/div[1]/div[1]/div[2]/div[1]/div[4]/div[1]/form[1]/button[1]").click()
      cy.xpath("//span[@class='error ng-binding']").should('have.text', 'Transaction successful')
      
    })
  
  })