var dbConn=require('../../Config/db.config');

//create book object
 var Book=function(book){
     this.title=book.title;
     this.description= book.description;
     this.author=book.author;
     this.image=book.image;
 };

//Insert row
Book.create= function(newBook, result){
    dbConn.query("INSERT INTO books set ?", newBook, function(err,res){
        if(err){
            console.log("error at inserting :",err)
            result(err,null);
        }else{
            console.log(res.insertId);
            result(newBook);
        }
    });
}

//Gett all data
Book.findAll=function(result){
    dbConn.query("Select * from books", function(err,res){
        if(err){
            console.log("error in fetching data :", err)
            result(err,null);
        }else{
            console.log("Book :", res);
            result( res);
        }
    })

};
// Fetch data by id 
Book.findById = function (id, result) {
    dbConn.query("Select * from books where id = ? ", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(res);
         }
      });
};


Book.update = function(id, book, result){
    dbConn.query("UPDATE books SET title=?,description=?,author=?,image=? WHERE id = ?", [book.title,book.description,book.author,book.image, id], 
        function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(null, err);
            }else{
                result(book);
            }
        });
};


Book.delete = function(id, result){
    dbConn.query("DELETE FROM books WHERE id = ?", [id], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      result(null, res);
        }
    });
};


module.exports=Book;