const Country = require('./country.model').Country;
const Category = require('./skill.model').Category;
const SubCategory = require('./skill.model').SubCategory;
const Skill = require('./skill.model').Skill;


exports.get = async () => {
    const [countries, categories, subCategories, skills] = await Promise.all([
        Country.find({}),
        Category.find({}),
        SubCategory.find({}),
        Skill.find({})
    ])
    return [200, '', {countries, categories, subCategories, skills}];
}

exports.insertData = async () => {
    // await new Country({
    //     name : 'India',
    //     nameAr : 'India',
    //     code : '+91',
    //     prefix : 'IN'
    // }).save();
    // category = await new Category({
    //     name : 'Technology',
    //     nameAr : 'Technology',
    // }).save();

    // subCategory = await new SubCategory({
    //     name : 'Frontend',
    //     nameAr : 'Frontend',
    //     categoryId : category._id
    // }).save();

    // skill = await new Skill({
    //     categoryId : "5f2564f0d2b5068e4aea1b91",
    //     subCategoryId : "5f2564f0d2b5068e4aea1b92",
    //     name : 'Angular',
    //     nameAr : 'Angular',
    // }).save()
    // console.log(skill);
    return [200, '', {}];
}