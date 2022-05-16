describe("Add new contact", () => {
  it("Test", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#name").type("Mike Field");
    cy.get("#email").type("mike.field@gmail.com");
    cy.get("form").submit();

    cy.get("ul li").should("have.text", "Mike Field : mike.field@gmail.com");
  });
});
