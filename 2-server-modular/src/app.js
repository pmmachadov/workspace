const express = require('express');
const routes = require('./routes');

const app = express();

// Set up routes
routes(app);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});