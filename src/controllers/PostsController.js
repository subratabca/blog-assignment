const PostsModel = require("../models/PostsModel");


exports.CreatePost=(req,res)=>{
    let reqBody=req.body
    reqBody.author=req.headers['name'];
    PostsModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(200).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.ReadAllPost=(req,res)=>{
    let Query={};
    let Projection="title description author"
    PostsModel.find(Query,Projection,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.ReadPostById=(req,res)=>{
    let id= req.params.id;
    PostsModel.find({_id:id},(err,data)=>{
            if(err){
                res.status(400).json({status:"fail",data:err})
            }
            else {
                res.status(200).json({status:"success",data:data})
            }
        })
}

exports.UpdatePost=(req,res)=>{
    let reqBody=req.body
    let id= req.params.id;
    let author=req.headers['name'];
    let Query={_id:id,author:author};
    PostsModel.updateOne(Query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.DeletePost=(req,res)=>{
    let id= req.params.id;
    let author=req.headers['name'];
    let Query={_id:id,author:author};
    PostsModel.remove(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}








