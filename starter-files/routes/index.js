const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const wes = { name: 'Wes', age: 100, cool: true };
  // res.send('Hey! It works!');
  // res.json(wes);
  // res.send(req.query.name);
  res.render('hello', {
    name: req.query.name
  });
});

router.get('/reverse/:name', (req, res) => {
  const reserve = [...req.params.name].reverse().join('');
  res.send(reserve);
});

module.exports = router;
