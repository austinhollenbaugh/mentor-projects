var express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    config = require('./config.js'),
    profileCtrl = require('./controllers/profileCtrl.js'),
    userCtrl = require('./controllers/userCtrl.js');

var app = express();
//returns an object that we can run methods from to handle various things

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: true
}));
app.use(express.static(__dirname + '/public'));

var port = config.port;
var corsOptions = {
  origin: 'http://localhost:' + port
};

app.get('/api/profiles', profileCtrl.friends);

app.post('/api/login', userCtrl.login);

app.listen(port, function(req, res, next) {
  console.log("listening on port", port);
});
