describe("Application main view", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("contains titel", () => {
    cy.get("section[name='title']").should("contain", "GitHub Search engine");
  });
  it("Search", () => {
    cy.get("input#search-input").type("craftAcademy");
    cy.get("button#search-button").click();
  });
});
