const { ObjectID } = require('mongodb');

const { User } = require('../../models/User');

const users = [
  {
    _id: new ObjectID(),
    name: 'Bill',
    email: 'alreadyused@test.com',
    password: 'notstrong',
  },
  {
    _id: new ObjectID(),
    name: 'Joseph',
    email: 'tester@test.com',
    password: 'helloworld',
  },
];

const populateUsers = done => {
  User.remove({})
    .then(() => {
      const userOne = new User(users[0]).save();
      const userTwo = new User(users[1]).save();

      return Promise.all([userOne, userTwo]);
    })
    .then(() => done());
};

module.exports = { users, populateUsers };
