const request = require('supertest');
const route = require('../../routes/api/users');
const mongoose = require('mongoose');

const { app, server } = require('../../server');
const { User } = require('../../db/models/User');
const { users, populateUsers } = require('../seed/testUserData');

app.use(route);

beforeEach(populateUsers);

afterAll(async () => {
  await mongoose.disconnect();
  await server.close();
});

describe('POST /register', () => {
  it('should register a user and hash password', done => {
    const name = 'Phil';
    const email = 'examples@test.com';
    const password = 'password';

    request(server)
      .post('/register')
      .send({ name, email, password })
      .expect(200)
      .expect(res => {
        expect(res.body._id).toBeDefined();
        expect(res.body.email).toBe(email);
        expect(res.body.password).not.toBe(password);
      })
      .end(err => {
        if (err) {
          return done(err);
        }

        User.findOne({ email })
          .then(user => {
            expect(user).toBeDefined();
            expect(user.password).not.toBe(password);
            done();
          })
          .catch(err => {
            done(err);
          });
      });
  });

  it('should not register a user with invalid credentials', done => {
    const name = 'Jo';
    const email = 'notavalidemail';
    const password = '123';

    request(server)
      .post('/register')
      .send({ name, email, password })
      .expect(400)
      .end(err => {
        if (err) {
          return done(err);
        }

        User.findOne({ email })
          .then(user => {
            expect(user).toBeNull();
            done();
          })
          .catch(err => {
            done(err);
          });
      });
  });

  it('should not register a user with an already used email', done => {
    const name = 'Joseph';
    const email = 'alreadyused@test.com';
    const password = 'password';

    request(server)
      .post('/register')
      .send({ name, email, password })
      .expect(400)
      .end(err => {
        if (err) {
          return done(err);
        }

        User.findOne({ email })
          .then(user => {
            expect(user.name).not.toBe(name);
            done();
          })
          .catch(err => {
            done(err);
          });
      });
  });
});

describe('POST /login', () => {
  it('should login the user and generate bearer token', done => {
    request(app)
      .post('/login')
      .send({
        email: users[0].email,
        password: users[0].password,
      })
      .expect(200)
      .expect(res => {
        expect(res.body.token).toBeDefined();
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        done();
      });
  });

  it('should not login a user with invalid credentials', done => {
    request(app)
      .post('/login')
      .send({
        email: users[0].email,
        password: 'incorrect',
      })
      .expect(400)
      .expect(res => {
        expect(res.body.error).toBeDefined();
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        done();
      });
  });
});
