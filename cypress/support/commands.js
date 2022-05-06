//Setting up aliases
Cypress.Commands.add("loginPage", (user, password) => {
  cy.get("@emailInput").type(user, { force: true });
  cy.get("@passwordInput").type(password, {
    force: true,
    log: false,
  });
  cy.get("@loginSubmit").scrollIntoView({ force: true });
  cy.get("header").scrollIntoView({ duration: 200 });
  cy.wait(1000);
  cy.get("@loginSubmit").click({ force: true });
  cy.wait(2000);
});
Cypress.Commands.add(
  "signupPage",
  (firstName, lastName, email, phone, password) => {
    cy.get('input[name="first_name"]')
      .as("name")
      .clear({ force: true })
      .type(firstName, { force: true });
    cy.get('input[name="last_name"]')
      .should("be.visible")
      .clear({ force: true })
      .type(lastName, { force: true });

    cy.get('input[name="phone"]')
      .should("be.visible")
      .clear({ force: true })
      .type(email, { force: true });
    cy.get('input[name="email"]')
      .should("be.visible")
      .clear({ force: true })
      .type(phone, { force: true });
    cy.get('input[name="password"]')
      .should("be.visible")
      .clear({ force: true })
      .type(password, { force: true, log: false });
    cy.log("waiting in commands");
    cy.wait(2000);
    cy.get(
      "#fadein > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div.form-group.mt-3 > button > span.ladda-label"
    )
      .as("signUpButton")
      .click({ force: true });
  }
);
Cypress.Commands.add("loginInfo", () => {
  cy.visit("https://phptravels.net/login");
  cy.get(
    "#fadein > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div:nth-child(1) > div > input"
  ).as("emailInput");
  cy.get(
    "#fadein > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div:nth-child(2) > div.form-group.mb-2 > input"
  ).as("passwordInput");
  cy.get("#rememberchb").as("remember");
  cy.get(
    "#fadein > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div.btn-box.pt-3.pb-4 > button"
  ).as("loginSubmit");
  cy.get('label[for="rememberchb"]').as("forgotPassword");
});
