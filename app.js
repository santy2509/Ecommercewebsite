
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
var MongoClient = require('mongodb').MongoClient;
var category = require('./routes/category');
var item = require('./routes/item');

  

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

MongoClient.connect("mongodb://localhost:27017/betterbuy", function(err, db) {
	  if(!err) {
	    console.log("We are connected");
	  }
	});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  }


app.get('/', routes.index);
app.get('/Better_Buy',routes.index);
app.get('/Better_Buy/Television',category.Television);
app.get('/Better_Buy/Car', category.Car);
app.get('/Better_Buy/NailPolish', category.NailPolish);
app.get('/Better_Buy/Television/Onida',item.Onida);
app.get('/Better_Buy/Television/Samsung',item.Samsung);
app.get('/Better_Buy/Television/LG',item.LG);
app.get('/Better_Buy/Television/Sony',item.Sony);
app.get('/Better_Buy/Car/Benz',item.Benz);
app.get('/Better_Buy/Car/BMW',item.BMW);
app.get('/Better_Buy/Car/VolksWagan',item.VolksWagan);
app.get('/Better_Buy/Car/Toyota',item.Toyota);
app.get('/Better_Buy/NailPolish/Butter',item.Butter);
app.get('/Better_Buy/NailPolish/Cnd',item.Cnd);
app.get('/Better_Buy/NailPolish/Essie',item.Essie);
app.get('/Better_Buy/NailPolish/Opi',item.Opi);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
