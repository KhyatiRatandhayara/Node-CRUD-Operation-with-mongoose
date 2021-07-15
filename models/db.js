const mongoose = require('mongoose');
const dbconfig = require('../config/db.config');

mongoose.connect(dbconfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },(err) => {
      if(!err){
          console.log("mongoose database connected successfully")
      }
      else{
          console.log("error",err);
      }
  })

require('./employee.model');