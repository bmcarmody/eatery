const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

// Imported Routes
const users = require('./routes/api/users');
const recipes = require('./routes/api/recipes');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

mongoose.set('useCreateIndex', true); // Fixes deprecation warnings
mongoose.set('useFindAndModify', false);

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// API Routes
app.use('/api/users', users);
app.use('/api/recipes', recipes);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set statis folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Exporting server for testing purposes
module.exports = { app, server };
