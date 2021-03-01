const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');

const userSchema = new Schema({
    email: {
        type: String,
        trim: true,
        required : true
    },
    role : {
        type:String,
        required:true
    },
    password: {
        type: String,
        required : true
    },
    firstName: {
        type: String,
        required : true
    },
    lastName: {
        type: String,
        required : true
    },
    gender : {
        type:String,
        required : true
    },
    country : {
        type: Schema.Types.ObjectId,
        ref: 'Country'
    },
    phone : {
        type:String,
        required : true
    },
    profilePic : {
        type:String,
        default:null
    }
})

userSchema.plugin(timestamps);
const User = mongoose.model('User', userSchema,'users');

exports.getUserById = function(id) {
    return User.findById(id);
}

exports.getUserByEmail = function(email) {
    return User.findOne({email});
}

exports.create = function(data) {
    return User.create(data);
}