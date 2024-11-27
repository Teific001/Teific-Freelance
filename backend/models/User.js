const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
   fullName :{
    type:String,
    required:true,
   },
   email:{
    type:String,
    required:true,
    validate(value){
        if(!validator.isEmail(value)){
            throw new Error("Enter a valid Email");
        }
    }
   },
   phoneNumber:{
    type:String,
    required:true,
    validate(value){
        if(!validator.isMobilePhone(value)){
            throw new Error("Enter a valid Phone Number");
        }
    }
   },
   organizatioName:{
    type:String,
   },
   description:{
    type:String
   }

})


module.exports = mongoose.model("User" , UserSchema);