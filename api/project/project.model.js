const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');

const projectSchema = new Schema({
    employerId : String,
    title : String,
    level : String,
    category : {type: Schema.Types.ObjectId, ref: 'Category'},
    subCategories : [{type: Schema.Types.ObjectId, ref: 'SubCategory'}],
    skills : [{type: Schema.Types.ObjectId, ref: 'Skill'}],
    description : String,
    price : Number,
    deliveryTime : Number,
    isPrivate : {type:Boolean, default:false},
    isActive : {type:Boolean, default:true},
    isDeleted :{type:Boolean, default:false},
})

projectSchema.pre('find', function() {
    this._conditions.isDeleted = false
});

projectSchema.pre('findOne', function() {
    this._conditions.isDeleted = false
});

const Project = mongoose.model('Project', projectSchema, 'projects');

exports.getProjectsbyUserId = function(employerId) {
    return Project.find({employerId});
}

exports.getProjectById = function(projectId) {
    return Project.findById(projectId);
}

exports.create = function(data) {
    return Project.create(data);
}