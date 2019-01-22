const bodyParser = require('body-parser');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Exporting app for testing purposes
module.exports = app;
