var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Twit = require('twit');
var client = null;

function connectToTwitter(){
	client = new Twit({
		consumer_key:	'<your consumer key>',
		consumer_secret:	'<your consumer secret>',
		access_token:	'<your access token>',
		access_token_secret:	'<your access token secret>'
	});
}
// get the app to connect to twitter
connectToTwitter();


//additional setup to allow CORS requests
var allowCrossDomain = function(req, response, next) {
   response.header('Access-Control-Allow-Origin', " http://localhost ");
   response.header('Access-Control-Allow-Methods', 'OPTIONS, GET,PUT,POST,DELETE');
   response.header('Access-Control-Allow-Headers', 'Content-Type');

  if ('OPTIONS' == req.method) {
    response.send(200);
  }
  else {
    next();
  }
};

app.use(bodyParser());

// Arquivo index.html é enviado acessando-se '/'
app.use(express.static('.')); // index.html está no mesmo dir que server.js
app.get('/', function(req, res) {
	res.sendfile('index.html');
});



//start up the app on port 80
app.listen(8080);
console.log('Listening on port 8080');

