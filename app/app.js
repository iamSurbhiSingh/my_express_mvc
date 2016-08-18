var express     = require('express'),
    http        = require('http'),
    stage       = require('./config/stage')(),
    conn        = require('./config/db_conn'),
    path        = require('path'),
    bodyParser  = require('body-parser'),
    app         = express();

						// DECLARE ROUTES
var routes = require('./routes/routes_index'),
    users = require('./routes/routes_users');

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'assets')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


                        // USE ROUTES
app.use('/', routes);
app.use('/users', users);


/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('errors/error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('errors/error', {
        message: err.message,
        error: {}
    });
});

conn(); // call to db_conn constructor.

http.createServer(app).listen(stage.port, function() {
    console.log('\n'+'\x1b[33m%s\x1b[0m ', ' ENV: ', "\x1b[36m", stage.mode +"\n","\x1b[31m");
    console.log('\x1b[33m%s\x1b[0m: '," Other ENVs ");
    console.log("\x1b[32m","> npm start production");
    console.log(" > npm start testing");
    console.log(" > npm start local");
    console.log( '\x1b[33m%s\x1b[0m: ', '\n My_Express listening on port' ,"\x1b[36m", stage.port);
    console.log("\n","\x1b[31m", "\n Press \'<Ctrl> + c\' to exit \n", "\x1b[35m");
});

module.exports = app;
