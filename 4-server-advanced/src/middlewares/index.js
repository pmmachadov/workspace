// This file exports middleware functions that can be used in the server's request/response pipeline

// Example middleware function
const exampleMiddleware = (req, res, next) => {
  // Perform some middleware logic here
  console.log('Example middleware');
  next();
};

module.exports = {
  exampleMiddleware,
};