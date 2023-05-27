const UsersModel = require("../models/UsersModel");
const jwt = require("jsonwebtoken");

// Registration
exports.Registration=(req, res)=>{
    let reqBody=req.body
    const { name, email, password } = req.body;
    // 2. all fields require validation
    if (!name.trim()) {
      return res.json({ error: "Name is required" });
    }
    if (!email) {
      return res.json({ error: "Email is required" });
    }
    if (!password || password.length < 6) {
      return res.json({ error: "Password must be at least 6 characters long" });
    }
    // 3. check if email is taken

    UsersModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(200).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.Login=(req,res)=>{
    let reqBody=req.body
    UsersModel.aggregate([
        {$match:reqBody},
        {$project:{_id:0,email:1,name:1}}
    ],(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            if(data.length>0){
                let Payload={exp: Math.floor(Date.now() / 1000) + (24*60*60), data:data[0]}
                let token = jwt.sign( Payload,'SecretKey123456789');
                res.status(200).json({status:"success",token:token,data:data[0]})
            }
            else {
                res.status(401).json({status:"unauthorized"})
            }
        }
    })
}




























