const request = require('supertest');
const server = require('../../server');
const route = require('../../routes/api/users');

server.use(route);

describe('POST /register', () => {
  test('It should register a user', () => {
    const name = 'Phil';
    const email = 'examples@test.com';
    const password = 'password';

    return request(server)
      .post('/register')
      .send({ name, email, password })
      .expect(200)
      .expect(res => {
        expect(res.body._id).toBeDefined();
        expect(res.body.email).toBe(email);
      });
  });
});
