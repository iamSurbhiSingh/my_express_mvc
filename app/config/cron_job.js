var CronJob = require('cron').CronJob;
var cj = {
/*
 *	Write all your jobs here 
 *	Remove the given 2 examples and add your own cron job.
*/
//------------------ CONTENT EDITABLE [start] ---------------------------

	_60sec_cron : new CronJob('*/60 * * * * *', function() {
					console.log('You will see this message every 60 second');
				}, null, true, 'Asia/Kolkata'),

	// _20sec_cron : new CronJob('*/20 * * * * *', function() {
	// 				console.log('You will see this message every 20 second');
	// 			}, null, true, 'Asia/Kolkata'),

//------------------ CONTENT EDITABLE [ends] ---------------------------
//------------------ RESTRICTED [start]---------------------------
/*
	{ THE STRUCTURE OF THE CRON JOB~~~~~~~~~~~~~~~~~~~

	jobname : new CronJob('00 30 11 * * 1-5', function() {
  
		    	//* Runs every weekday (Monday through Friday)
		    	//* at 11:30:00 AM. It does not run on Saturday
		    	//* or Sunday.
   
    }, function () {
       			//* This function is executed when the job stops 
    },
    true, 		//* Start the job right now 
    timeZone 	//* Time zone of this job.
);

# ┌────────────── second (optional)
# │ ┌──────────── minute
# │ │ ┌────────── hour
# │ │ │ ┌──────── day of month
# │ │ │ │ ┌────── month
# │ │ │ │ │ ┌──── day of week
# │ │ │ │ │ │
# │ │ │ │ │ │

# * * * * * *
	Refer https://www.npmjs.com/package/cron for more information.

*/
}
module.exports = function(){
	for(var x in cj){
		cj[x].start();
	}
}
//------------------ RESTRICTED [end]---------------------------