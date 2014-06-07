var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Twit = require('twit');
var client = null;

function connectToTwitter(){
	client = new Twit({
		consumer_key:	'',
		consumer_secret:	'',
		access_token:	'',
		access_token_secret:	''
	});
}
// get the app to connect to twitter
resp = connectToTwitter();
console.log(resp);


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

// Returns the twitter timeline for the current user
app.get('/timeline', function(request, response) {
	console.log('Entrou em /timeline');
	response.header('Access-Control-Allow-Origin', '*');
	client.get('statuses/home_timeline', {}, function(err, reply) {
		if(err) {
			response.send(404);
		}
		if(reply) {
			response.json(reply);
		}
	});
});



//start up the app on port 80
app.listen(8080);
console.log('Listening on port 8080');

