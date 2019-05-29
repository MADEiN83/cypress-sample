describe("First test", () => {
  it("Test DOM elements", () => {
    cy.visit("http://localhost:3333/");

    cy.screenshot();

    cy.url().should("include", "localhost");

    cy.get(".App-link")
      .should("have.attr", "href", "https://reactjs.org")
      .should("have.attr", "target", "_blank")
      .should("have.attr", "rel", "noopener noreferrer")
      .should("have.attr", "class", "App-link")
      .invoke("attr", "href");

    cy.get("img")
      .should("have.attr", "src", "/static/media/logo.5d5d9eef.svg")
      .screenshot();
  });
});
