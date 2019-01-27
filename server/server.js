const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

// Imported Routes
const users = require('./routes/api/users');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./db/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

mongoose.set('useCreateIndex', true); // Fixes deprecation warnings
mongoose.set('useFindAndModify', false);

// Passport middleware
//app.use(passport.initialize());

// Passport Config
//require('./config/passport')(passport);

// API Routes
app.use('/api/users', users);

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Exporting server for testing purposes
module.exports = { app, server };
