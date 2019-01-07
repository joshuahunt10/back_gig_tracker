var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  res.json({"name": "Bill", "last": "Hunt", "age": 32, "registered": 'false'});
  // res.send('work??')
})

module.exports = router;
