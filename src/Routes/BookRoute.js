const express = require('express')
const router = express.Router()
const BookController=require("../Controllers/BookContoller");

router.post('/AddBook', BookController.create);

router.get('/GetAllBooks', BookController.findAll);

router.get('/GetById/:id',BookController.findById);

router.put('/UpdateBook/:id/', BookController.update);

router.delete('/DeleteBook/:id', BookController.delete);

module.exports=router;  