import db from './models/db';
import twitter from 'twitter';
import config from '../config';
import streamHandler from './streamHandler';
import express from 'express';
import bodyParser from 'body-parser';
import routers from './routers';

//crawling
var twit = new twitter({
	"consumer_key":  process.env.CONSUMER_KEY,
	"consumer_secret":  process.env.CONSUMER_SECRET,
	"access_token_key":  process.env.ACCESS_TOKEN_KEY,
	"access_token_secret":  process.env.ACCESS_TOKEN_SECRET
});
twit.stream('statuses/filter',{ track: config.trackTweet}, function(stream){
  streamHandler(stream);
});

//Setup Rest API
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// routing
var apiRouter = routers(app, express);
app.use('/api/v1', apiRouter);

// start server
var port = process.env.APP_PORT || 5000;
app.listen(port);
console.log('Server http://localhost:' + port);