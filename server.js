// require express:
var express = require('express');
// require path:
var path = require('path');
// make app using express:
var app = express();
var router = express.Router();
// require body-parser:
var bodyParser = require('body-parser');
// give express app a bodyParser which works with urlencoded forms
app.use(bodyParser.urlencoded({extended: true}));
// give express app a bodyParser which works with json
app.use(bodyParser.json());
// set static directories:
app.use(express.static(path.join(__dirname, 'build')));
//allows express app access to all CORS-related things
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  res.setHeader("Cache-Control", "no-cache");
  next();
});
// run mongoose.js which connects to mongodb
require('./src/server/config/mongoose.js');
// require a function which accepts express app as an argument to set routes:
var routes_setter = require('./src/server/config/routes.js');
// invoke the function with app as an argument:
routes_setter(app);
// check for environment variable process.env.PORT and store it, or default 8000:
var port = process.env.PORT || 8000;
// start listening for connections at port, then invoke given callback:
app.listen(8000,function(){console.log(`listening on port ${port}`);});