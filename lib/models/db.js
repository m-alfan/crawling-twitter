import dotenv from 'dotenv';
import fs from 'fs';
import mongoose from 'mongoose';
import './tweets';

dotenv.config({path: '/'});
if (fs.existsSync('.env')) {
	dotenv.load();
}

var dbURI = 'mongodb://'+process.env.USER_DB+':'+process.env.PASS_DB+'@'+process.env.HOST_DB+'/'+process.env.NAME_DB+'?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
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