const express = require('express');
const app = express();
const routes = require('./routes');
const middlewares = require('./middlewares');

// Apply middlewares
middlewares.forEach(middleware => app.use(middleware));

// Setup routes
routes.forEach(route => app.use(route.path, route.router));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});