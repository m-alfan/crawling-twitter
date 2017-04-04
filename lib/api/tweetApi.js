import Tweet from '../models/tweets';
import url from 'url';
import explode from '../helpers/explode';
import arrayToRegex from '../helpers/arrayToRegex';

export const getAllTweet = (req, res) => {
	var _get = url.parse(req.url, true).query;

  var page = (_get.page) ? parseInt(_get.page) : 1,
  		limit = (_get.limit) ? parseInt(_get.limit) : 5,
  		querySeach= {};

  var skip = (page - 1) * limit;
  if(_get.text) {
  	var query = arrayToRegex(explode(',', _get.text));
  	querySeach = { "text": {$in: query}};
  }
  Tweet.find(querySeach, 'id source text service date date_unix image is_bookmark sentiment user', { skip: skip, limit: limit }, function(err,docs){
  	if (err)
			res.send({status: false, data: err});

		res.json({status: true, data: docs});
  });
}

export const getSeriesTweet = (req, res) => {
	Tweet.aggregate([
    { "$project" : {
    	_id: 0,
			datetime: { $dateToString: { format: "%Y-%m-%d %H:%M:%S", date: "$date" } },
			hour: { $hour: "$date" },
    }},
    { $group: { _id: { "hour": "$hour" }, date: { $first: "$datetime" }, count: { $sum: 1 } } },
    { $group: { _id: 0, data: { $push: { date: "$date", count: "$count"  } } } }
	], function(err, docs) {
		if (err) {
	 		res.send({status: false, data: err});
		}

	 	var dataDocs = docs;
	 	if(docs.length > 0) {
	 		res.json({status: true, data: dataDocs[0].data});
	 	} else {
	 		res.json({status: true, data: dataDocs});
	 	}
	});
}