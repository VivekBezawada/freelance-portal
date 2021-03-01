const constants = require("../../constants")

exports.registerSchema = {
    "properties" : {
        "email": {"type": "string", "minLength":3,"maxLength":50},
        "password": {"type": "string", "minLength":3,"maxLength":25},
        "password2" : {const: { $data: '1/password'}},
        "firstName": {"type": "string", "minLength":3,"maxLength":50},
        "lastName": {"type": "string", "minLength":1,"maxLength":50},
        "gender": {"type": "string", "enum" : constants.GENDER},
        "country" : {"type": "string", "minLength":24,"maxLength":24},
        "phone" : {"type": "string", "minLength":8,"maxLength":15},
        "profilePic": {"type": "string", "minLength":3,"maxLength":100},
        "role" : {"type": "string", "enum" : constants.ROLES},
    },
    "required" : ["email", "password", "password2", "firstName", "lastName", "gender", "country", "phone", "role"]
}

exports.loginSchema = {
    "properties" : {
        "email": {"type": "string", "minLength":3,"maxLength":50},
        "password": {"type": "string", "minLength":3,"maxLength":25},
    },
    "required" : ["email", "password"]
}