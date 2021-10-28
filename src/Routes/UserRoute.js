const express = require('express')
const router = express.Router()
const UserController = require("../Controllers/UsersController")
const  jwt= require('jsonwebtoken')

const verifyJwt = (req, res, next)=>{
    const token= req.headers["x-access-token"]

    if(!token){
        res.send("o dont have a token bro!! , u need one to access :(")
    }else{
        jwt.verify(token,"jwtSecret",(err, decoded)=>{
            if(err){
                res.json({ auth: false, message:"u failed to ahthentificate"})
            }else{
                req.userId= decoded.id
                next();
            }
        })
    }
}



router.post("/Register", UserController.create);

router.post("/Authentifiation", UserController.find)

router.get("/isUserAuth", verifyJwt, (req,res)=>{
    res.send("congrats u are authenticate :)")
})

router.delete("/DeleteUser/:id", UserController.delete)

module.exports=router;  