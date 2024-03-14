const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema({
       name:{
              type:String,
              required:true
       },
       age:{
              type:Number,
              required:true
       },
       address:{
              type:String,
              required:true
       },
       phone:{
              type:Number,
              required:true
       },
       blood:{
              type:String,
              required:true
       }

       
})

const UserModel = mongoose.model("user",UserSchema)
module.exports = UserModel