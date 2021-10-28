var dbConn=require('../../Config/db.config');
const  jwt= require('jsonwebtoken')


var User= function(user){
    this.email= user.email;
    this.username= user.username;
    this.password= user.password;
    this.role= user.role;
};


User.create= (newUser, result)=>{
    dbConn.query("INSERT INTO users set?", newUser,(err,res)=>{
        if(err){
            console.log("error in iserting data")
            result(err,null);
        }else{
            console.log(res.insertId);
            result(newUser);
        }
    });
};



User.find= (req, res)=>{
    const email= req.body.email;
    const password= req.body.password;

    dbConn.query("SELECT * from users where email = ? and password = ?"
    ,[email,password]
    ,(err, result)=>{
        if(err){
            res.send({error : err})
        }
        if (result.length>0){    //user exist
            // console.log(result.length)

            const id = result[0].id
            const token = jwt.sign({id}, "jwtSecret",{
                expiresIn:300,
            })

            res.json({auth: true, token: token, result: result})
        } else{
            res.send({message: "no user with this comnination email/password"})
        }
        
        
    });
};


User.delete=(id, result)=>{
    dbConn.query("DELETE from users where id =?", id,(err,res)=>{
        if(err){
            console.log("error :", err)
            result(err)
        }else{
            result(res)
        }
    })
}


module.exports= User;