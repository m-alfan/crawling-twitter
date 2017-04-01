import config from '../../config';


const checkTweet =  (str) => {
	if (str['user'] !== undefined) {
	  return config.filterTweet.some(function(v) {
	  	return str['text'].indexOf(v) >= 0; 
	  });
	}
	return true;
}

const formatRequest = (data, callback) => {
	//check
	if(!(checkTweet(data))) {
		var result = {
      id: data['id_str'],
      source: data['source'],
      text: data['text'],
      service: "twitter",
      date: data['created_at'],
      date_unix: data['timestamp_ms'],
      image: "",
      is_bookmark: 0,
      sentiment: {
        positif: false,
        negatif: false,
        netral: true
      },
      user: {
        avatar: data['user']['profile_image_url'],
        name: data['user']['screen_name']
      }
	  };
		callback(false, result);
	} else {
		callback(true, '');
	}
}

export default formatRequest;