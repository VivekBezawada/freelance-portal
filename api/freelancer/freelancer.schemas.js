const constants = require('../../constants');

exports.freelancerSchema = {
    "type": "object",
    "properties" : {
        "title": {"type": "string", "minLength":3,"maxLength":100},
        "bio" : {"type": "string", "minLength":3,"maxLength":5000},
        "tags" : {"type":"array", "items": {"type" : "string", "minLength":1, "maxLength":100}},
        "coverPhoto" : {"type": "string", "minLength":3,"maxLength":100},
        "experience" : {
            "type":"array", 
            "items": {
                "type" : "object",
                "properties" : {
                    "position": {"type": "string", "minLength":3,"maxLength":100},
                    "type" : {"type" : "string", "enum" : constants.FREELANCER_EXPERIENCE_TYPES},
                    "company": {"type": "string", "minLength":3,"maxLength":100},
                    "location" : {"type": "string", "minLength":3,"maxLength":100}, // TODO: Can Validate the country
                    "startDate" : {"type":"string", "minLength":13, "maxLength":13},
                    "endDate" : {"anyOf" : [{"type" : "null"}, {"type":"string", "minLength":13, "maxLength":13}]},
                    "description" : {"type": "string", "minLength":3,"maxLength":5000},
                },
                "required" : ["position", "type", "company", "location", "startDate", "endDate", "description"]
            }
        },
        "freelanceExperience" : {
            "type":"array",
            "items" : {
                "type" : "object",
                "properties" : {
                    "platform": {"type": "string", "enum" : constants.FREELANCER_FREELENCE_PLATFORMS},
                    "platformLink" : {"type" : "string", "minLength":3,"maxLength":100},
                    "profileLink": {"type": "string", "minLength":3,"maxLength":100},
                    "experience" : {"type": "string", "minLength":5,"maxLength":5},
                },
                "required" : ["platform", "platformLink", "profileLink", "experience"]
            }
        },
        "education" : {
            "type":"array", 
            "items": {
                "type" : "object",
                "properties" : {
                    "university": {"type": "string", "minLength":3,"maxLength":100},
                    "degree" : {"type" : "string", "minLength":3,"maxLength":100},
                    "startDate" : {"type":"string", "minLength":13, "maxLength":13},
                    "endDate" : {"anyOf" : [{"type" : "null"}, {"type":"string", "minLength":13, "maxLength":13}]},
                    "description" : {"type": "string", "minLength":3,"maxLength":5000},
                },
                "required" : ["university", "degree", "startDate", "endDate", "description"]
            }
        },
        "certification" : {
            "type":"array", 
            "items": {
                "type" : "object",
                "properties" : {
                    "title": {"type": "string", "minLength":3,"maxLength":100},
                    "issuer" : {"type" : "string", "minLength":3,"maxLength":100},
                    "date" : {"type":"string", "minLength":13, "maxLength":13},
                    "url" : {"type": "string", "minLength":3,"maxLength":5000},
                },
                "required" : ["title", "issuer", "date", "url"]
            }
        },
        "portfolio" : {
            "type":"array", 
            "items": {
                "type" : "object",
                "properties" : {
                    "title": {"type": "string", "minLength":3,"maxLength":100},
                    "image" : {"type" : "string", "minLength":3,"maxLength":100},
                    "description" : {"type": "string", "minLength":3,"maxLength":5000},
                },
                "required" : ["title", "image", "description"]
            }
        },
        "languages" : {
            "type":"array", 
            "items": {
                "type" : "object",
                "properties" : {
                    "languageId": {"type": "string", "minLength":24,"maxLength":24},
                    "level" : {"type" : "string","enum" : constants.LEVEL},
                },
                "required" : ["languageId", "level"]
            }
        },
        "daysOfWork" : {"type":"string","minLength":7,"maxLength":7},
        "hoursPerWeek" : {"type": "integer", "minimum":5,"maximum":100},
        "pricePerHour" : {"type": "integer", "minimum":1,"maximum":100},
        "skills" : {
            "type":"array", 
            "items": {"type" : "string","minLength":24,"maxLength":24}
        },
    },
    "oneOf": [
        { "required": [ "title" ] },
        { "required": [ "bio" ] },
        { "required": [ "tags" ] },
        { "required": [ "coverPhoto" ] },
        { "required": [ "experience" ] },
        { "required": [ "freelanceExperience" ] },
        { "required": [ "education" ] },
        { "required": [ "certification" ] },
        { "required": [ "portfolio" ] },
        { "required": [ "languages" ] },
        { "required": [ "daysOfWork" ] },
        { "required": [ "hoursPerWeek" ] },
        { "required": [ "pricePerHour" ] },
        { "required": [ "skills" ] },
    ]
}