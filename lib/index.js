import db from './models/db';
// import Tweet from './models/tweets';
import twitter from 'twitter';
import config from '../config';
import streamHandler from './streamHandler';

var twit = new twitter(config.twitterConfig);

twit.stream('statuses/filter',{ track: config.trackTweet}, function(stream){
  streamHandler(stream);
});

// callback function to avoid duplicating it all over
/*var callback = function (err, data) {
  if (err) { return console.error(err); }
  else { console.log(data); }
}
// Get ONLY completed tasks
Tweet.find({}, callback);*/
