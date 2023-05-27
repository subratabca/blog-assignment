var jwt = require('jsonwebtoken');
module.exports=(req,res,next)=>{
    let Token=req.headers['token'];
    jwt.verify(Token,"SecretKey123456789",function (err,decoded) {
        if(err){
            console.log(Token)
            res.status(401).json({status:"unauthorized"})
        }
        else {
            let data=decoded['data'];
            //console.log(">>>>>>>>>>>>",data)
            req.headers.email=data['email'];
            req.headers.name=data['name'];
            next();
        }
    })
}