/// <reference types="cypress" />

const user = "sanel_omanovic@hotmail.com";
const email = "w@w";
const password = "mostar2003";
const firstName = "w";
const lastName = "w";
const phone = "+26";
describe("login page", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.loginInfo();
    cy.wait(2000);
  });
  context("Login validation fields", () => {
    it("PHP-101 - Navigate to the login page and make sure all required elements are visible", () => {
      //Making sure all login page elements are visible
      cy.get("#cookie_stop").click();
      cy.get("@emailInput").should("be.visible").type("A", { force: true });
      cy.get("@passwordInput").should("be.visible").type("A", { force: true });
      cy.url().should("contain", "/login");
      cy.get("@remember").should("exist");
      cy.get(".font-size-14").should(
        "contain",
        "Please enter your account credentials below"
      );
      cy.get("@forgotPassword").should("be.visible");
      cy.screenshot({
        overwrite: true,
        capture: "runner",
        path: "/Sanel/Desktop/FlightsPage.js/screenshots/Login1.png",
      });
    });
  });
  context("Login options", () => {
    it("PHP-102 - Login with valid username and password", () => {
      cy.loginPage(user, password);
      cy.get("#cookie_stop").click();
      cy.screenshot({
        overwrite: true,
        capture: "runner",
        path: "/Sanel/Desktop/FlightsPage.js/screenshots/Login2.png",
      });
    });
    it("PHP-103 - Log in  to a page", () => {
      cy.loginPage(user, password);
      cy.get("#cookie_stop").click();
      cy.get(
        "#fadein > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div.btn-box.pt-3.pb-4 > div > div > a > span.ladda-label"
      ).click({ force: true });
      cy.signupPage(firstName, lastName, email, phone, password);
      cy.wait(1000);
      cy.screenshot({
        capture: "runner",
        overwrite: true,
        path: "/Sanel/Desktop/FlightsPage.js/screenshots/Login4.png",
      });
    });
    it("PHP-103 - Sign Up to a page", () => {
      cy.wait(2000);
      cy.get("@emailInput").clear({ force: true });
      cy.get("@passwordInput").clear({ force: true });
      cy.wait(2000);
      cy.get("@emailInput").type(email, { force: true });
      cy.get("@passwordInput").type(password, { force: true, log: false });
      cy.clearCookies();
      cy.wait(2000);
      cy.clearCookies();
      cy.get("@loginSubmit").click({ force: true });
      cy.screenshot({
        overwrite: true,
        capture: "runner",
        path: "/Sanel/Desktop/FlightsPage.js/screenshots/Login3.png",
      });
    });
  });
});
