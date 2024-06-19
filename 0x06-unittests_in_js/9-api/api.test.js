const request = require('request');
const { expect } = require('chai');

describe('Cart page', () => {
  const baseUrl = 'http://localhost:7865';

  it('Correct status code when :id is a number', (done) => {
    const cartId = 12;
    request.get(`${baseUrl}/cart/${cartId}`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal(`Payment methods for cart ${cartId}`);
      done();
    });
  });

  it('Correct status code when :id is NOT a number (=> 404)', (done) => {
    const invalidId = 'hello';
    request.get(`${baseUrl}/cart/${invalidId}`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      expect(body).to.equal('Not Found');
      done();
    });
  });
});

