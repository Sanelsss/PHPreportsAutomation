/// <reference types="cypress" />

//const { beforeEach } = require("mocha");
//import loginInfo from "../support/commands";
//const user = "sejnthe97@gmail.com";
const user = "sanel_omanovic@hotmail.com";
const email = "p@r";
const password = "mostar2003";
const firstName = "p";
const lastName = "r";
//const email = "random@gmail.com";
const phone = "+4";
describe("login page", () => {
  beforeEach(() => {
    //cy.visit("https://phptravels.net/login");
    cy.clearCookies();
    cy.loginInfo();
    //loginInfo();
    cy.wait(2000);
    //cy.get("header").scrollIntoView({ duration: 200 });
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
      cy.screenshot(
        {
          overwrite: true,
          capture: "runner",
          path: "/Sanel/Desktop/FlightsPage.js/screenshots/Login1.png",
        }
        /*         "./actions/login/Login"
         */
      );

      /*  cy.contains("Remember me?").should("be.visible");
    cy.get("@loginSubmit").should("be.visible");
    cy.get("@registerAccount").should("be.visible"); */
    });
  });
  context("Login options", () => {
    it("PHP-102 - Login with valid username and password", () => {
      cy.loginPage(user, password);
      cy.get("#cookie_stop").click();
      //cy.get("#logOut").should("be.visible");
      cy.screenshot(
        {
          overwrite: true,
          capture: "runner",
          path: "/Sanel/Desktop/FlightsPage.js/screenshots/Login2.png",
        }
        /*         "./actions/login/Login"
         */
      );

      /*  cy.get("p")
      .contains("Logged in. Redirecting you now...")
      .should("be.visible");
            cy.url().should("contain", "/login/failed");
    cy.url().should("contain", "/account/dashboard");
    cy.get("#logOut").should("be.visible"); */
    });
    it("PHP-103 - Sign Up to a page", () => {
      cy.loginPage(user, password);
      cy.get("#cookie_stop").click();
      cy.get(
        "#fadein > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div.btn-box.pt-3.pb-4 > div > div > a > span.ladda-label"
      ).click({ force: true });
      cy.signupPage(firstName, lastName, email, phone, password);
      cy.screenshot(
        {
          capture: "runner",
          overwrite: true,
        },
        "./actions/signup/SignUp"
      );
      cy.wait(2000);
      cy.get("@emailInput").clear({ force: true });
      cy.get("@passwordInput").clear({ force: true });
      cy.wait(2000);
      cy.get("@emailInput").type(email, { force: true });
      cy.get("@passwordInput").type(password, { force: true });
      cy.clearCookies();
      cy.wait(2000);
      cy.clearCookies();
      cy.get("@loginSubmit").click({ force: true });
      cy.screenshot(
        {
          overwrite: true,
          capture: "runner",
          path: "/Sanel/Desktop/FlightsPage.js/screenshots/Login3.png",
        }
        /*         "./actions/login/Login"
         */
      );
    });
  });
});

/* const loginInfo = () => {
  cy.visit("https://phptravels.net/login");
  cy.get(
    "#fadein > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div:nth-child(1) > div > input"
  ).as("emailInput");
  cy.get(
    "#fadein > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div:nth-child(2) > div.form-group.mb-2 > input"
  ).as("passwordInput");
  //cy.get('[href="/account/forgot"]').as("forgotPassword");
  cy.get("#rememberchb").as("remember");
  cy.get(
    "#fadein > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div.btn-box.pt-3.pb-4 > button"
  ).as("loginSubmit");
  cy.get('label[for="rememberchb"]').as("forgotPassword");
}; */
