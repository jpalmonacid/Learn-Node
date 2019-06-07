const express = require('express');
const router = express.Router();

const storeController = require('../controllers/storeController');
const { catchErrors } = require('../handlers/errorHandlers');

// Do work here
router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);
router.post('/add', catchErrors(storeController.createStore));


router.get('/reverse/:name', (req, res) => {
  const reserve = [...req.params.name].reverse().join('');
  res.send(reserve);
});

module.exports = router;
