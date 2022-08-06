// check this file using TypeScript if available
// @ts-check
const apiGraphQL = `${Cypress.env('apiUrl')}/graphql`;

describe('Avocados Queries and Mutations', function () {
  context('/graphql', function () {
    it('Gets a list of users', function () {
      cy.request('POST', `${apiGraphQL}`, {
        query: `query {
             users {
              id
              username
            }
            }`,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data.users[0].id).to.eq(1);
      });
    });
    it('Gets a list of Avocados', function () {
      cy.request('POST', `${apiGraphQL}`, {
        query: `query {
               avos {
                id
                name
              }
            }`,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data.avos[0].name).to.eq('Fuerte Avocado');
      });
    });
    it('Gets a Avocado by ID', function () {
      cy.request('POST', `${apiGraphQL}`, {
        query: `query Query($avoId: ID!) {
          avo(id: $avoId) {
            id
            name
          }
        }`,
        variables: {
          avoId: 5,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data.avo.name).to.eq('Hass Avocado');
      });
    });
  });
});
