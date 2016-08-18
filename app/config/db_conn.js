
var db_config = {
	connection : 'mongo',
	db_name : "mydb"
}

//------------------ RESTRICTED [start]---------------------------
// 	You dont necessarily need to make any changes in this section.
//	By default we will are using MongoDB. In case you want
// 	to have some other database, only then you can make 
//	necessary changes below.
//							OR
//	If you have additional information required for establishing
//	the connection then you can go ahead and make the requied changes
 
var db_conn = {
	mongo : function(){
		var mongoose   = require('mongoose');
		mongoose.Promise = global.Promise;
		mongoose.connect('mongodb://localhost/'+db_config.db_name);
	}
}

module.exports = db_conn[db_config.connection];
//------------------ RESTRICTED [end]---------------------------