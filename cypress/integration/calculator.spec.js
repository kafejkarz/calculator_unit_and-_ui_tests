describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it("should number buttons update the display of the running total", () => {
    cy.get("#number5").click();
    cy.get("#number3").click();
    cy.get('.display').should('contain', "53")
  })

  it("should arithmetical operations update the display with the result of the operation", () => {
    cy.get("#number2").click();
    cy.get("#operator_add").click();
    cy.get("#number3").click();
    cy.get("#operator-equals").click()
    cy.get('.display').should('contain', "5")
  })

  it("should multiple operations be chained together", () => {
    cy.get("#number4").click();
    cy.get("#operator_add").click();
    cy.get("#number6").click();
    cy.get("#operator-multiply").click();
    cy.get("#number3").click();
    cy.get("#operator-equals").click()
    cy.get(".display").should("contain", "30");

  })

  it("should have expected output for a range of numbers", () => {
    cy.get("#number0").click();
    cy.get("#decimal").click();
    cy.get("#number2").click();
    cy.get("#operator-subtract").click();
    cy.get("#number1").click();
    cy.get("#number2").click();
    cy.get("#number2").click();
    cy.get("#number2").click();
    cy.get("#number3").click();
    cy.get("#number4").click();
    cy.get("#number4").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "-1222343.8");
  
  })

  it("should respond with divide by zero", () => {
    cy.get("#number6").click();
    cy.get("#operator-divide").click();
    cy.get("#number0").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "error");

  })
})