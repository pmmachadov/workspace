const express = require('express');
const router = express.Router();
const { getHelloMessage } = require('../controllers/index');

router.get('/', (req, res) => {
  const message = getHelloMessage();
  res.send(message);
});

module.exports = router;