'use strict';

const PORT = process.env.PORT || 3000;

var express = require('express');
var moment = require('moment');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var stormpath = require('express-stormpath');


const MONGOURL = process.env.MONGODB_URI || 'mongodb://localhost/connectApp';

mongoose.connect(MONGOURL, err => {
  console.log(err || `Connected to MongoDB at ${MONGOURL}`)
});

var app = express();
app.use(cookieParser());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(stormpath.init(app, {
  web: {
    me: {
      expand: {
        customData: true
      }
    },
    register: {
      form: {
        fields: {
          profilePic: {
            enabled: true,
            label: 'url',
            name: 'url',
            required: false,
            type: 'text'
          },
          username: {
            enabled: true,
            label: 'username',
            name: 'username',
            required: false,
            type: 'text'
          }
          
        }
      }
    }
  }
}));


app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', require('./routes/api'));
app.use('/', require('./routes/index'));



// instagram.set('client_id', instagram_client_id);
// instagram.set('client_secret', instagram_client_secret);

var server = http.createServer(app);

server.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);
});