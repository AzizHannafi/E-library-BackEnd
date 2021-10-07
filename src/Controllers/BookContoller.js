const Book= require("../Models/Books")

exports.findAll = function(req, res) {
  Book.findAll(function(err, book) {
    if (err){
      res.send(err);
    }else{
      console.log('res', book);
      res.send(book);
    }  
  });
};

exports.create = function(req, res) {
    const new_book = new Book(req.body);
    Book.create(new_book, function(err, book) {
      if (err){
        res.send(err);
      }else{
       // res.send(req.body);
      } 
    });

};


exports.findById = function(req, res) {
  Book.findById(req.params.id, function(err, book) {
    if (err){
      res.send(err);
    }else{
      res.send(book);
    }
  });
};
  

exports.update = function(req, res) {
  Book.update(req.params.id, new Book(req.body), function(err, book) {
   if (err){
    res.send(err);
   }
   else{
    //res.json({ error:false, message: 'Book successfully updated',book });
    res.send(book);
   }
 
});

};

exports.delete = function(req, res) {
  Book.delete( req.params.id, function(err, book) {
    if (err){
      res.send(err);
    }else{
      res.json({ error:false, message: 'book successfully deleted' });
    }    
  });
};