describe("Add new contact", () => {
  it("Add new contact", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#name").type("Mike Field");
    cy.get("#email").type("mike.field@gmail.com");
    cy.get("form").submit();

    cy.get(".display-addresses").should(
      "have.text",
      "Mike Field : mike.field@gmail.com"
    );
  });

  it("Don't add contact if all fields are empty", () => {
    cy.visit("http://localhost:3000");
    cy.get("form").submit();

    cy.get(".Toastify__toast-container").should("be.visible");
    cy.get(".display-addresses").should("not.have.text", " : ");
  });

  it("Don't add contact if one field are empty", () => {
    cy.visit("http://localhost:3000");
    cy.get("#name").type("Mike Field");
    cy.get("form").submit();

    cy.get(".Toastify__toast-container").should("be.visible");
    cy.get(".display-addresses").should("not.have.text", " : ");
  });
});
