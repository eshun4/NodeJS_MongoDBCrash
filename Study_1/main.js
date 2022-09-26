const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
PORT = process.env.PORT;
const EventEmitter = require('events');
app.set('view engine', 'pug')

const routes = require('./routes/');
app.use(routes);



app.listen(PORT, () =>{
    console.log("Server is running at http://localhost:" + PORT);
})