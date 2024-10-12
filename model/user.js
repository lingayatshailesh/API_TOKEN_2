const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userData = ({
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    profileImage:{
        type : String,
        required : true
    }
})

USER = mongoose.model("user",userData)
module.exports = USER