const express = require('express')
const router = express.Router()
const BookController=require("../Controllers/BookContoller");
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


router.post('/AddBook',verifyJwt, BookController.create);

router.get('/GetAllBooks', BookController.findAll);

router.get('/GetById/:id',BookController.findById);

router.put('/UpdateBook/:id/', BookController.update);

router.delete('/DeleteBook/:id',verifyJwt, BookController.delete);

module.exports=router;  