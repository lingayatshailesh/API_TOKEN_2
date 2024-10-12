const mongoose = require('mongoose');
const Schema = mongoose.Schema

const contactData = ({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    contactno : {
        type : Number,
        required : true,
        unique : true
    }
    
})

CONTACT = mongoose.model("contact",contactData)
module.exports = CONTACT