const express = require('express')
const router = express.Router()

const ContactController= require('../Controllers/ContactController');
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


router.post('/AddContact', ContactController.create);

router.get('/GetAllContact', ContactController.findAll);

router.get('/GetById/:id',ContactController.findById);

router.put('/UpdateContact/:id/', ContactController.update);

router.delete('/DeleteContact/:id',verifyJwt, ContactController.delete);

module.exports=router;  
