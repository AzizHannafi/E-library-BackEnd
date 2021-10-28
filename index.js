const express = require('express');
const bodyParser = require('body-parser');

var dbConn= require('./Config/db.config')
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
var cors = require('cors')

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route

app.use(express.json())
app.use(cors({origin:"http://localhost:3000"}));

const booksRoute = require("./src/Routes/BookRoute")
app.use("/Books/",booksRoute)

const contactRoute= require("./src/Routes/ContactRoute")
app.use("/Contacts/",contactRoute)


const userRoute = require ("./src/Routes/UserRoute")
app.use("/Users/",userRoute);

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});