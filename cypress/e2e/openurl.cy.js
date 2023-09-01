
describe('Validate Webpage Language', () => {
  beforeEach(() => {
    cy.visit('https://coinmarketcap.com/es/')
  })

  it('switches language to English', () => {
    cy.get('button[title="Modifica tu idioma"]').click()	
    cy.get('.sc-95c89bcc-0 > :nth-child(1) > :nth-child(2) > .gPFIPZ').click()
    cy.get('a[href*="watchlist"]').should('contain.html', 'watchlist')
  })
})