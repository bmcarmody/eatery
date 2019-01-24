const express = require('express');
const server = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

// Imported Routes
const users = require('./routes/api/users');

// Body parser middleware
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

mongoose.set('useCreateIndex', true); // Fixes deprecation warnings

// Passport middleware
//server.use(passport.initialize());

// Passport Config
//require('./config/passport')(passport);

// API Routes
server.use('/api/users', users);

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Exporting server for testing purposes
module.exports = server;
