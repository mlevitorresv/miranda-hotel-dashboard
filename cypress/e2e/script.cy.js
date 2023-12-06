describe('Comprobación de login', () => {
  it('Compruebo que lleva a /home después de meter los datos correctos', () => {
    cy.visit('http://localhost:5173/');
    
    cy.get('input[name=emailInput').type('test@test.com');
    
    cy.get('input[name=passInput').type('test1234');
    
    cy.get('button[type=submit]').click();
  
    cy.url().should('include', '/home');
    cy.window().then(win => console.log(win));
    cy.reload();
  })


  it('Compruebo que se mantiene en /login después de meter los datos incorrectos', () => {
    cy.visit('http://localhost:5173/');
    
    cy.get('input[name=emailInput').type('test@tes.com');
    
    cy.get('input[name=passInput').type('test1234');
    
    cy.get('button[type=submit]').click();
    cy.url().should('include', '/');
  })
})