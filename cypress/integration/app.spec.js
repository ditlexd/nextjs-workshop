beforeEach(() => {
  /*
   * Reset the database before every request. This way we can work with a
   * fresh set of data, and our tests don't affect each other
   */

  cy.request('PATCH', 'http://localhost:9000/api/products').should(
    (response) => {
      expect(response.status).to.eq(204);
    }
  );
});

describe('Display a product', () => {
  it('Returns status 200 and returns a list of products', () => {
    cy.request('GET', 'http://localhost:9000/api/products').should(
      (response) => {
        expect(response.status).to.eq(200);
        const product = response.body[0];
        expect(product.name).to.eql('Pizza');
        expect(product.description).to.eql(
          'Large Pizza. Very good. Much delicious. Try now!'
        );
      }
    );
  });

  it('Should render a list of products', () => {
    cy.visit('http://localhost:9000/');
    cy.contains('Pizza');
    cy.contains('Large Pizza');
    cy.contains('Shoes');
    cy.contains('Best shoes around. Guaranteed!');
  });
});

describe('Delete a product', () => {
  const productIdToDelete = '6eee6ba7-2110-4216-9d3d-1b74621249ac';
  it('API route should return 201 when product is deleted', () => {
    cy.request(
      'GET',
      `http://localhost:9000/api/products?id=${productIdToDelete}`
    ).should((response) => expect(response.status).to.eql(200));
  });

  it('Should be able to delete a product', () => {
    cy.visit('http://localhost:9000/');
    cy.contains('Pizza');
    cy.get('[data-cy=Delete]').click({ multiple: true });
    cy.get('Pizza').should('not.exist');
  });
});

/*
describe('New product page', () => {
  it('Should be possible to create a new product', () => {
    cy.visit('http://localhost:9000/new-product');
    cy.contains('Name').type('Koffert');
    cy.contains('Description').type('En fin og stor koffert!');
    cy.contains('Image url').type('image-url.com');

    cy.get('[data-cy=Submit]').click();
    cy.visit('http://localhost:9000/');
    cy.contains('En fin og stor koffert!');
  });
});
 */

/*
describe('Update product', () => {
  it('Should be able to update a product', () => {
    cy.visit('http://localhost:9000/');
    cy.get('[data-cy=card-1]').click();

    cy.contains('Edit product');
    cy.get('[data-cy=edit-name]').type('Edited product');
    cy.get('[data-cy=edit-description]').type('Really good, brand new product');
    cy.get('[data-cy=submit-edit]').click();

    cy.get('Edit product').should('not.exist');
    cy.contains('Really good, brand new product');
  });
});
 */
