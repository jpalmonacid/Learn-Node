const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

// Do work here
router.get('/', storeController.myMiddleware, storeController.homePage);

router.get('/reverse/:name', (req, res) => {
  const reserve = [...req.params.name].reverse().join('');
  res.send(reserve);
});

module.exports = router;
