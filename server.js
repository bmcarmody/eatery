const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();

const User = require('./models/User');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB connect'))
  .catch(err => console.log(err));

// Passport middleware
//app.use(passport.initialize());

// Passport Config
//require('./config/passport')(passport);

const newUser = User({
  name: 'Test',
  email: 'Test',
  password: 'Test',
});

newUser.save();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
