var dbConn=require('../../Config/db.config');

var Contact=function(contact){
    this.username=contact.username;
    this.email= contact.email;
    this.subject=contact.subject;
    this.message=contact.message;
};

//Insert row

Contact.create= function(newContact,result){
    dbConn.query("INSERT INTO contacts set ?", newContact , function(err,res){
        if(err){
            console.log("error at inserting :",err)
            result(err,null);
        }else{
            console.log(res.insertId);
            result(newContact);
        }
    });
};

//Gett all data
Contact.findAll=function(result){
    dbConn.query("Select * from contacts", function(err,res){
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
Contact.findById = function (id, result) {
    dbConn.query("Select * from contacts where id = ? ", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(res);
         }
      });
};



Contact.update = function(id, contact, result){
    dbConn.query("UPDATE contacts SET username=?,email=?,subject=?,message=? WHERE id = ?", [contact.username,contact.email,contact.subject,contact.message, id], 
        function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(null, err);
            }else{
                result(contact);
            }
        });
};



Contact.delete = function(id, result){
    dbConn.query("DELETE FROM contacts WHERE id = ?", [id], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      result(null, res);
        }
    });
};

module.exports=Contact;