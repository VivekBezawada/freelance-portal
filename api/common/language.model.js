const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');

const languageSchema = new Schema({
    name : String,
    nameAr : String
})

languageSchema.plugin(timestamps);

const Language = mongoose.model('Language', languageSchema, 'languages');
exports.Language = Language;