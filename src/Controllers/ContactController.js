const Contact=require('../Models/ContactModel')

exports.findAll = function(req, res) {
    Contact.findAll(function(err, book) {
      if (err){
        res.send(err);
      }else{
        console.log('res', book);
        res.send(book);
      }  
    });
  };

  exports.create = function(req, res) {
    //const new_contact = new Contact(req.body);
    console.log(req.body)
    Contact.create(req.body,function(err, contact) {
      if (err){
        res.send(err);
      }else{
       res.send(req.body);
      } 
    });

};

exports.findById = function(req, res) {
    Contact.findById(req.params.id, function(err, contact) {
      if (err){
        res.send(err);
      }else{
        res.send(contact);
      }
    });
  };
    
  exports.delete = function(req, res) {
    Contact.delete( req.params.id, function(err, contact) {
      if (err){
        res.send(err);
      }else{
        res.json({ error:false, message: 'contact successfully deleted' });
      }    
    });
  };

  exports.update = function(req, res) {
    Contact.update(req.params.id, new Contact(req.body), function(err, contact) {
     if (err){
      res.send(err);
     }
     else{
      //res.json({ error:false, message: 'Book successfully updated',book });
      res.send(contact);
     }
   
    });
  
  };
