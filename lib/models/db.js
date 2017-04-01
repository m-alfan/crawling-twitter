import mongoose from 'mongoose';
import config from '../../config';
import './tweets';

var dbURI = 'mongodb://'+config.userMongodb+':'+config.passMongodb+'@cluster0-shard-00-00-7kqnd.mongodb.net:27017,cluster0-shard-00-01-7kqnd.mongodb.net:27017,cluster0-shard-00-02-7kqnd.mongodb.net:27017/'+config.dbMongodb+'?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
mongoose.connect(dbURI); 

mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open');
}); 

mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
});