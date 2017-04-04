import express from 'express';
import { getAllTweet, getSeriesTweet } from './api/tweetApi';

const routers = (app, express)  => {
	var router = express();
	// api/v1/tweet
	router.route('/tweet').get(getAllTweet);

	// api/v1/series
	router.route('/series').get(getSeriesTweet);

	return router;
}

export default routers;