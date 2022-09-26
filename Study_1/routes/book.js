const express = require("express");
const bookRouter = express.Router();
const connect = require('./../database/db');

const EventEmitter = require('events');

const myEvent = new EventEmitter();

myEvent.on('test-event', (data) => {
    console.log("Test Event Fired!");
    console.log(data);
});

bookRouter.route('/')
.get(async(req, res)=>{
    const db = await connect();
    const books = await db.collection(process.env.DB_COLLECTION).find().toArray();
    myEvent.emit("test-event", books);
    res.send(books);
}).post(async(req, res)=>{
    res.json({data: "Book is stored."});
    const db = await connect();
    const data = {
        title : "Power of Consistency",
        author : "unkown"
    }
    db.collection(process.env.DB_COLLECTION).insertOne(data);
});

bookRouter.get('/:id', (req, res)=>{
    // console.log(req.params);
    res.send('Single book of ID: ' + req.params.id);
    console.log('Single book of ID: ' + req.params.id);
});

bookRouter.route(':/id').patch( (req, res)=>{
    // console.log(req.params);
    res.send('Single book of ID: ' + req.params.id + 'to update.');
}).delete( (req, res)=>{
    // console.log(req.params);
    res.send('Single book of ID: ' + req.params.id + 'to update.');
});

  // To handle any other rout
  bookRouter.all("/*", (req,res) => {
    res.send("Page not found");
});
//Once you make the export below you can use al the routes from here in your main.js file
module.exports = bookRouter;