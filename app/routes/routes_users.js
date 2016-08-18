var express = require('express');
var router = express.Router();
// https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications

var User = require('../controllers/userController');


											// user registration
router.post('/create', function(req, res){
	User.create_newUser(req, res);
});

module.exports = router;