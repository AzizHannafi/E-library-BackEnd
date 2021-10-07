const express = require('express')
const router = express.Router()

const ContactController= require('../Controllers/ContactController');

router.post('/AddContact', ContactController.create);

router.get('/GetAllContact', ContactController.findAll);

router.get('/GetById/:id',ContactController.findById);

router.put('/UpdateContact/:id/', ContactController.update);

router.delete('/DeleteContact/:id', ContactController.delete);

module.exports=router;  
