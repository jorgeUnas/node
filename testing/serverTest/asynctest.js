const request = require('supertest');

const app = require('../../app');

describe('the homepage', () => {
  it('returns the correct content', async () => {
    const response = await request(app)
      .post('/messages')
      .type('form')
      .send({author, message});
      console.log(response.text);
    });
});