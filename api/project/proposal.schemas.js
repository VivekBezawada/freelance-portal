const constants = require('../../constants');

exports.proposalSchema = {
    "properties" : {
        "price" : {"type": "integer", "minimum":5,"maximum":10000},
        "deliveryTime" : {"type":"string", "minLength":13, "maxLength":13},
        "description" : {"type": "string", "minLength":3,"maxLength":5000},
        "fileLink" : {"type": "string", "minLength":3,"maxLength":100},
    },
    "required" : ["description", "price", "deliveryTime"]
}