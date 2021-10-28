const User = require ("../Models/Users")

exports.create=(req, res)=>{
    const new_User = new User(req.body);
    User.create(new_User,(err, user)=>{
        if(err){
            res.send(err);
        }else{
            res.send(req.body);
        }
    })
}

exports.find=(req, res)=>{
    User.find( req, res
    ,(err, result)=>{
        if(err){
            res.send({error : err})
        }
        if (result){    //user exist
            res.send(result)
        } else{
            console.log("no user with this comnination email/password")
            res.send({message: "no user with this comnination email/password"})
        }
        
        
    });
}

exports.delete=(req,res)=>{
    User.delete(req.params.id,(err,user)=>{
        if(err){
            res.send(err);
        }else{
            res.json({
                error: false,
                message: 'user deleted !'
            })
        }
    });
};