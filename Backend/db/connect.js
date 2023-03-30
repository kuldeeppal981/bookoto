const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url,{ useNewUrlParser: true }, function (err) { 
    if (err) throw err;
     console.log('mongodb Successfully connected'); });
};

module.exports = connectDB;
