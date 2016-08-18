
var db_config = {
	connection : 'mongo',
	db_name : "wikinf"
}
var db_conn = {
	mongo : function(){
		var mongoose   = require('mongoose');

		// db_name = 'wikinf';					// Enter the database name
		console.log("reached")
		mongoose.Promise = global.Promise;
		mongoose.connect('mongodb://localhost/'+db_config.db_name);
	}
}

module.exports = db_conn[db_config.connection];
		