import Tweet from'./models/tweets';
import formatRequest from './models/formatRequest';

const streamHandler = (stream) => {
  stream.on('data', function(data) {
    var tweet = formatRequest(data, function(err, result){
      if(!err){
        var tweetEntry = new Tweet(result);
        tweetEntry.save(function(err) {
          if (err) { console.log(err); }
        });
      }
    });
  });

  stream.on('error', function(error) {
    console.log(error);
  });
};

export default streamHandler;