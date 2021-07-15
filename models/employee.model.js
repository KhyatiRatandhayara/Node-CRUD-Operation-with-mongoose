const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    fullName: {
      type: String
    },
    email: {
        type: String,
        require: true
    },
    mobile: {
        type: String
    },
    city: {
        type: String
    }
},
{
    timestamps: true 
});

mongoose.model('Employee',employeeSchema);