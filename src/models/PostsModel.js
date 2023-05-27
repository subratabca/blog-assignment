const  mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    title:{
        type:String,
        trim: true,
        required:true
    },
    description:{
        type:String,
        trim: true,
        required:true
    },
    author:{
        type:String,
        trim: true,
        required:true,
    },
    createdDate:{type:Date,default:Date.now()}
},{versionKey:false});
const PostsModel=mongoose.model('posts',DataSchema);
module.exports=PostsModel

