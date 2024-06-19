const request = require('request');
const { expect } = require('chai');

describe('API endpoints', () => {
  const baseUrl = 'http://localhost:7865';

  // Test suite for /available_payments endpoint
  describe('GET /available_payments', () => {
    it('returns correct payment methods', (done) => {
      request.get(`${baseUrl}/available_payments`, (error, response, body) => {
        const expected = {
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        };
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal(expected);
        done();
      });
    });
  });

  // Test suite for /login endpoint
  describe('POST /login', () => {
    it('returns a welcome message with username', (done) => {
      const userName = 'Betty';
      const options = {
        url: `${baseUrl}/login`,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userName })
      };
      request.post(options, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal(`Welcome ${userName}`);
        done();
      });
    });
  });
});

