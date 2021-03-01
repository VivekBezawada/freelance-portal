const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');

const employerSchema = new Schema({
    userId : {
        type : String,
        required : true,
        unique : true
    },
    email : String,
    firstName : String,
    lastName : String,
    gender : String,
    country : String,
    phone : String,
    profilePic : String,
    bio : String,
    rating : Number,
    isActive : {type:Boolean, default:true}
})

const Employer = mongoose.model('Employer', employerSchema, 'employers');

exports.getEmployerByUserId = function(userId) {
    return Employer.findOne({userId});
}

exports.create = function(data) {
    return Employer.create(data);
}