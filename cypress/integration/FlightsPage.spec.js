/// <reference types="cypress" />

describe("Hotels page", () => {
  beforeEach(() => {
    flightSearch();
    cy.clearCookies();
    cy.scrollTo("top");
  });
  context("Search for a flight ", () => {
    it("PHP-107 - Searching for a  flight", () => {
      //Making sure all login page elements are visible
      cy.get("#autocomplete").type("Doha", { force: true });
      cy.get(
        "#onereturn > div.col-md-6 > div > div:nth-child(1) > div > div > div > div > div:nth-child(1) > div.autocomplete-location"
      ).click({ force: true });
      cy.get("#autocomplete2").type("Chicago", { force: true });
      cy.get(
        "#onereturn > div.col-md-6 > div > div:nth-child(2) > div > div.form-group > div > div > div:nth-child(1) > div:nth-child(1) > strong"
      ).click({ force: true });
      cy.get("#flights-search").click({ force: true });

      cy.screenshot({
        overwrite: true,
        capture: "runner",
        path: "/Sanel/Desktop/FlightsPage.js/screenshots/Flight1.png",
      });
    });
    it("PHP-106 - Searching for a flight company/specific flight", () => {
      cy.get(
        "#new-york > div > div:nth-child(2) > a > div > div > div.col-7 > h6"
      ).click({ force: true });
      //Checking  LionAir
      cy.get("#flights_1").check({ force: true });
      cy.get(
        "#data > ul > li:nth-child(1) > div > form > div > div.col-md-10 > div.theme-search-results-item-preview > div.theme-search-results-item-mask-link"
      ).click({ force: true });
      cy.get(
        "#searchResultsItem-0 > div > div.theme-search-results-item-extend-inner > div > div > div > div.col-md-9 > div > ul > li > div.row > div.col-6.flight_desc > p:nth-child(1)"
      ).click({ force: true });
      cy.screenshot({
        overwrite: true,
        capture: "runner",
        path: "/Sanel/Desktop/FlightsPage.js/screenshots/Flight2.png",
      });
    });
  });
  context("Checking DOM", () => {
    it("PHP-107 - Checking banner DOM elements", () => {
      cy.get("@searchButton").should("be.visible").click({ force: true });
      cy.get("@banner").children().should("have.length", 9);
      cy.get("@banner").eq(0).children().should("contain", "Home");
      cy.get("@banner").eq(3).children().should("contain", "Tours");
      cy.screenshot({
        overwrite: true,
        capture: "runner",
        path: "/Sanel/Desktop/FlightsPage.js/screenshots/Flight3.png",
      });
    });
  });
});
const flightSearch = () => {
  cy.visit("https://phptravels.net/flights");
  cy.get("#flights-search > span.ladda-label").as("searchButton");
  cy.get(".main-menu-content>nav>ul>li").as("banner");
};
