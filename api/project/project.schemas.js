const constants = require('../../constants');

exports.projectSchema = {
    "properties" : {
        "title": {"type": "string", "minLength":3,"maxLength":100},
        "level" : {"type" : "string","enum" : constants.LEVEL},
        "category" : {"type" : "string","minLength":24,"maxLength":24},
        "subCategories" : {
            "type":"array", 
            "items" : {"type" : "string","minLength":24,"maxLength":24},
        },
        "skills" : {
            "type":"array", 
            "items": {"type" : "string","minLength":24,"maxLength":24}
        },
        "description" : {"type": "string", "minLength":3,"maxLength":5000},
        "price" : {"type": "integer", "minimum":5,"maximum":10000},
        "deliveryTime" : {"type":"string", "minLength":13, "maxLength":13},
        "isPrivate" : {"type" : "boolean"},
        "isActive" : {"type" : "boolean"},
    },
    "required" : ["title", "level", "category", "subCategories", "skills", "description", "price", "deliveryTime"]
}