
    it('Assertion Demo', () => {
      cy.visit('https://example.cypress.io')
      cy.contains('get').click()

      //Implicit
      cy.get('#query-btn')
        .should('contain','Button')
        .and('have.class','query-btn')
        .and('be.visible')
        .should('be.enabled')
        
      //Explicit
        expect(true).to.be.true

      assert.equal(3,3,'equal') 
      assert.equal(3,'3','equal') 
      // assert.strictEqual(3,'3','equal') 

    })
  