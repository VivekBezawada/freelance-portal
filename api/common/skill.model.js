const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');

const categorySchema = new Schema({
    name : String,
    nameAr : String
});

const subCategorySchema = new Schema({
    name : String,
    nameAr : String,
    category : {type: Schema.Types.ObjectId, ref: 'Category'},
});

const skillSchema = new Schema({
    categoryId : {type: Schema.Types.ObjectId, ref: 'Category'},
    subCategoryId : {type: Schema.Types.ObjectId, ref: 'SubCategory'},
    name : String,
    nameAr : String,
})

subCategorySchema.plugin(timestamps);
categorySchema.plugin(timestamps);
skillSchema.plugin(timestamps);

const Category = mongoose.model('Category', categorySchema,'categories');
const SubCategory = mongoose.model('SubCategory', subCategorySchema,'subcategories');
const Skill = mongoose.model('Skill', skillSchema, 'skills');
module.exports = {
    Category, SubCategory, Skill
}