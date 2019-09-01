var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('dd');
});
router.get('/id/:id', function(req, res, next) {
  res.send('respond with a resource'+req.params.id);
});

router.get('/name/:name', function(req, res, next) {
  res.send('respond with a resource'+req.params.name);
});
module.exports = router;
