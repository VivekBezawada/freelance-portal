const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');

const experienceSchema = new Schema({
    position : String,
    type : String,
    company : String,
    location : String,
    startDate : Number,
    endDate : Number,
    description : String,
})

const freelanceExperienceSchema = new Schema({
    platform : String,
    platformLink : String,
    profileLink : String,
    experience : String,
})

const educationSchema = new Schema({
    university : String,
    degree : String,
    startDate : Number,
    endDate : Number,
    description : String,
})

const certificationSchema = new Schema({
    title : String,
    issuer : String,
    date : Number,
    url : String,
})

const portfolioSchema = new Schema({
    title : String,
    image : String,
    description : String,
})

const languageSchema = new Schema({
    languageId : String,
    level : String
})

const freelancerSchema = new Schema({
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
    title : String,
    bio : String,
    tags : [String],
    coverPhoto : String,
    experience : [experienceSchema],
    freelanceExperience : [freelanceExperienceSchema],
    education : [educationSchema],
    certification : [certificationSchema],
    languages : [languageSchema],
    portfolio : [portfolioSchema],
    skills : [{type: Schema.Types.ObjectId, ref: 'Skill'}],
    daysOfWork : String,
    hoursPerWeek : Number,
    pricePerHour : Number,
    rating : Number,
    percent : Number, // minimum -> 80%
    isSignupCompleted : {type:Boolean, default:false},
    isActive : {type:Boolean, default:true}, // backend algos - as many as for matching
})

freelancerSchema.plugin(timestamps);
experienceSchema.plugin(timestamps);
freelanceExperienceSchema.plugin(timestamps);
educationSchema.plugin(timestamps);
certificationSchema.plugin(timestamps);
portfolioSchema.plugin(timestamps);
languageSchema.plugin(timestamps);

const Freelancer = mongoose.model('Freelancer', freelancerSchema,'freelancers');

exports.getFreelancerByUserId = function(userId) {
    return Freelancer.findOne({userId});
}

exports.create = function(data) {
    return Freelancer.create(data);
}