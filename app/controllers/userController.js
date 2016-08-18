var User = require('../models/user');

var userController = {
	create_newUser : function(req, res){
		var newUser = new User({
			email: req.body.email,
			phone: parseInt(req.body.phone),
			password: 'password',
			admin: true
		});

		User.find({ email: newUser.email }, function(err, user) {
			if (err) throw err;
			if(user.length > 0){
			  	console.log("User already exists.");
			  	return;
			}
			else
			{
				newUser.save(function(err) {
					if (err) throw err;
					console.log('User saved successfully!');
					return res.send("Done");
				});
			}
		});
	},
}

module.exports = userController;