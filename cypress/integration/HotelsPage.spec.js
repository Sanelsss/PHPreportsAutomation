/// <reference types="cypress" />

describe("Hotels page", () => {
  beforeEach(() => {
    hotelSearch();
    cy.clearCookies();
    cy.scrollTo("top");
  });
  context("Search for a specific hotel", () => {
    it("PHP-104 - Searching for a hotel", () => {
      cy.get('input[ role="searchbox"]').type("Ist", { force: true });
      cy.get(
        "#select2-hotels_city-results > li.select2-results__option.select2-results__option--highlighted"
      )
        .should("be.visible")
        .click({ force: true });
      cy.get("@checkin").should("be.visible").click({ force: true });
      cy.get('input[name="checkout"]')
        .should("be.visible")
        .click({ force: true });
      cy.get(
        "#fadein > div:nth-child(22) > div.datepicker-days > table > tbody > tr:nth-child(3) > td:nth-child(3)"
      ).click({ force: true });
      cy.get("@searchButton").should("be.visible").click({ force: true });
      cy.clearCookies();
      cy.screenshot({
        overwrite: true,
        capture: "runner",
        path: "/Sanel/Desktop/FlightsPage.js/screenshots/Hotel1.png",
      });
    });
    it("PHP-106 - DOM checkout and hotels main page checkout", () => {
      cy.url().should("be.equal", "https://phptravels.net/hotels");
      cy.get("@dots").children().should("have.length", 3);
      cy.get("@dots").eq(1).click({ force: true });
      cy.get("@dots").eq(2).click({ force: true });
      cy.get("#cookie_stop").click({ force: true });
      cy.get("@someHotel").scrollIntoView({
        duration: 200,
      });
      cy.screenshot({
        overwrite: true,
        capture: "runner",
        path: "/Sanel/Desktop/FlightsPage.js/screenshots/Hotel2.png",
      });
    });
  });

  context("Check some additional info", () => {
    it("PHP-107 - Selecting a specific hotel and guest info input", () => {
      cy.get(
        "#fadein > section.hotel-area.section-bg.section-padding.overflow-hidden.padding-right-100px.padding-left-100px > div > div.row.padding-top-50px > div > div > div > div.owl-stage-outer > div > div:nth-child(7) > div > div.card-img > a > img"
      )
        .should("be.visible")
        .click({ force: true });
      cy.get(
        "#availability > div.single-content-item.padding-top-40px.padding-bottom-30px.rooms > div:nth-child(1) > div.card-body > div > div.col-md-9 > form > div > div.col-md-3.booked_44 > div > div > button > span.ladda-label "
      )
        .should("be.visible")
        .click({ force: true });
      cy.get('input[name="firstname"]')
        .should("be.visible")
        .type("a", { force: true });
      cy.get('input[name="lastname"]')
        .should("be.visible")
        .type("a", { force: true });
      cy.screenshot({
        overwrite: true,
        capture: "runner",
        path: "/Sanel/Desktop/FlightsPage.js/screenshots/Hotel3.png",
      });
    });
  });
});
const hotelSearch = () => {
  cy.visit("https://phptravels.net/hotels");
  cy.get("#cookie_stop").click({ force: true });
  cy.get(".ladda-label").as("searchButton");
  cy.get(".main-menu-content>nav>ul>li").as("banner");
  cy.get(".owl-dots>.owl-dot").as("dots");
  cy.get(
    "#fadein > section.hotel-area.section-bg.section-padding.overflow-hidden.padding-right-100px.padding-left-100px > div > div.row.padding-top-50px > div > div > div > div.owl-stage-outer > div > div:nth-child(13) > div > div.card-img > a > img"
  ).as("someHotel");
  cy.get("#select2-hotels_city-container")
    .as("hotelContainer")
    .click({ force: true });
  cy.get(
    "#fadein > span > span > span.select2-search.select2-search--dropdown > input"
  ).as("container");
  cy.get(
    "#fadein > span > span > span.select2-search.select2-search--dropdown > input"
  ).as("istanbul");
  cy.get('input[name="checkin"]').as("checkin");
};
