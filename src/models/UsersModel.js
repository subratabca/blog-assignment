const  mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
      },
      email: {
        type: String,
        trim: true,    
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        min: 6,
        max: 64,
      },
    createdDate:{type:Date,default:Date.now()}
},{versionKey:false});
const UsersModel=mongoose.model('users',DataSchema);
module.exports=UsersModel
