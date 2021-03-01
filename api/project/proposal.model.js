const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');

const proposalSchema = new Schema({
    projectId : String,
    freelancerId : String,
    price : Number,
    deliveryTime : Number,
    fileLink : String,
    description : String,
    isShortlisted : {type:Boolean, default:false}
})

proposalSchema.plugin(timestamps);

const Proposal = mongoose.model('Proposal', proposalSchema, 'proposals');

exports.create = function(data) {
    return Proposal.create(data);
}