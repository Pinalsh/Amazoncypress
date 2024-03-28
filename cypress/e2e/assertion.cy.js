describe("Amazon", () => {
    //Before each is used in multiple tests and it will run before every 'it' block test
   // beforeEach(() => {
      it("Verify the URL of   page", () => {
      cy.visit("https://www.amazon.co.uk/");
  
      // Accept cookies
      cy.get("#sp-cc-accept").click();
      
   
   // it("Verify the URL of   page", () => {
        // Assert the URL
       // cy.url().should("eq", "https://www.amazon.co.uk/");
      
     // Send text to search box "socks"
      cy.get('#twotabsearchtextbox').type('socks').type('{enter}');
     // click on first item
     cy.get('.s-main-slot [data-component-type="s-search-result"]').first().find('a.a-link-normal').eq(0).click()
     //click on add to cart button
    cy.get('#add-to-cart-button').click()
    //navigate to cart 
    cy.get('#nav-cart-count').click()
    //verify socks are in cart
    cy.get('.sc-product-title').should('include.text', 'Socks')
     });
  });

