/// <reference types="cypress" />

describe("Hotels page", () => {
  beforeEach(() => {
    flightSearch();
    cy.clearCookies();
    cy.scrollTo("top");
    //cy.get("header").scrollIntoView({ duration: 200 });
  });
  context("Search for a specific flight", () => {
    it("PHP-107 - Searching for a unavailable flight", () => {
      //Making sure all login page elements are visible
      cy.get("#autocomplete").type("Doha", { force: true });
      cy.get(
        "#onereturn > div.col-md-6 > div > div:nth-child(1) > div > div > div > div > div:nth-child(1) > div.autocomplete-location"
      ).click({ force: true });
      cy.get("#autocomplete2").type("Sienna", { force: true });
      cy.get(
        "#onereturn > div.col-md-6 > div > div:nth-child(2) > div > div.form-group > div > div > div:nth-child(1) > div:nth-child(1) > strong"
      ).click({ force: true });
      cy.get("#flights-search").click({ force: true });
      cy.screenshot(
        {
          overwrite: true,
          capture: "runner",
        },
        "./actions/login/FlightsPage1/1"
      );
    });
    it("PHP-106 - UI checkout", () => {
      cy.get(
        "#new-york > div > div:nth-child(2) > a > div > div > div.col-7 > h6"
      ).click({ force: true });
      cy.get("#flights_1").click({ force: true });
      cy.get(
        "#data > ul > li:nth-child(1) > div > form > div > div.col-md-10 > div.theme-search-results-item-preview > div.theme-search-results-item-mask-link"
      ).click({ force: true });
      cy.get(
        "#searchResultsItem-0 > div > div.theme-search-results-item-extend-inner > div > div > div > div.col-md-9 > div > ul > li > div.row > div.col-6.flight_desc > p:nth-child(1)"
      ).click({ force: true });
      cy.screenshot(
        {
          overwrite: true,
          capture: "runner",
        },
        "./actions/login/FlightsPage2/2"
      );
    });
  });
  context("Check some additional info", () => {
    it("PHP-107 - Sign Up to a page", () => {
      cy.get("@searchButton").should("be.visible").click({ force: true });
      cy.get("@banner").children().should("have.length", 9);
      cy.get("@banner").eq(0).children().should("contain", "Home");
      cy.get("@banner").eq(3).children().should("contain", "Tours");
      cy.screenshot(
        {
          overwrite: true,
          capture: "runner",
          path: "/Sanel/Desktop/FlightsPage.js/screenshots/Flight.png",
        }
        /*  "./actions/login/FlightsPage3/3" */
      );
    });
  });
});
const flightSearch = () => {
  cy.visit("https://phptravels.net/flights");
  cy.get("#flights-search > span.ladda-label").as("searchButton");
  cy.get(".main-menu-content>nav>ul>li").as("banner");
};
