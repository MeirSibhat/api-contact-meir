const mongoose = require('mongoose');
const userSchma= new mongoose.Schema({

    firstName:{
        type:String,
        required: true,
        minLength: 2,
        maxLength: 30
    },
    lastName:{
        type:String,
        required: true,
        minLength: 2,
        maxLength: 30
    },
    email:{
        type:String,
        required: true,
        minLength: 5,
        maxLength: 99
    },
    phone:{
        type:String,
        required: true,
        minLength: 6,
        maxLength: 20
    },
    areaCode:{
        type:String,
        required: true,
        minLength: 1,
        maxLength: 5
    },

})

exports.userModel=mongoose.model("users",userSchma)