import mongoose from 'mongoose';

//validasi schema
var schema = new mongoose.Schema({
    id       : String
  , source     : String
  , text       : String
  , service    : String
  , date       : Date
  , date_unix  : String
  , image      : String
  , is_bookmark: Number
  , sentiment  : {
      positif: Boolean
      , negatif: Boolean
      , netral: Boolean
  }
  , user       : {
      avatar: String
      , name: String
  }
});

var Tweet = mongoose.model('Tweet', schema);

export default Tweet;