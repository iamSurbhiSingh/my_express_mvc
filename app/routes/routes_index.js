
var express = require('express');
var router = express.Router();

// router.use(function(req, res, next) {
//   // .. some logic here .. like any other middleware
//   next();
// });

// GET home page.
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/post', function(req, res){
	res.json( req.body);
	
});
module.exports = router;
