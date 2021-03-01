const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');

const countrySchema = new Schema({
    name : String,
    nameAr : String,
    code : String,
    prefix : String
})

countrySchema.plugin(timestamps);

const Country = mongoose.model('Country', countrySchema, 'countries');
exports.Country = Country;