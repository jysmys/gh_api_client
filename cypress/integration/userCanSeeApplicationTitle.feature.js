describe("Application main view", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("contains titel", () => {
    cy.get("section[name='title']").should("contain", "GitHub Search engine");
  });
  it("Search", () => {
    cy.get("input#search-input").type("craftAcademy");
    cy.wait(1000);
    cy.get("button#search-button").click();
    cy.get("#search-items").within(() => {
      cy.get("#CraftAcademy").should("contain", "CraftAcadamy");
    });
  });
});
