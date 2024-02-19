import { faker } from "@faker-js/faker";
const fakeCompanyName = faker.company.name();
const fakePin = faker.finance.pin(9);
const fakeDescription = faker.lorem.sentence(5);



describe("Login", () => {
  before(() => {
    cy.DevRest();
  });
    it("Create Contractor", () => {
      const token = window.localStorage.getItem('access_token');
      cy.request({
        method: "POST",
        url: "https://api.base.dev.dorim.com/v1/contractors",
        headers: {
          Authorization: "Bearer " + token,
          accept: "application/json",
        },
        body: {
          contractor_type_id: 9,
          name: fakeCompanyName,
          legal_status_id: 18,
          country_id: "860",
          country_name: "Узбекистан",
          description: fakeDescription,
          parent_id: 0,
          tin: fakePin,
          activity_status_id: 1,
          responsible_manager_id: 191,
          price_list_source: "",
        },
      }).then((response) => {
          expect(response.status).eq(200);
          expect(response.body).to.exist;
          cy.log(`Response: ${JSON.stringify(response.body)}`);
      })
    });
  });
  
 
       