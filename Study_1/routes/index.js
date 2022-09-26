const express = require("express");
const router = express.Router();
const bookRouter = require('./book');
const path = require('path');


router.get('/', (req, res) => {
    console.log(__dirname );
    res.render('index', {name: "Kofi"});
});

router.use('/book', bookRouter);
  
// To handle any other route
router.all("/*", (req,res) => {
    res.send("Page not found");
});

//Once you make the export below you can use al the routes from here in your main.js file
module.exports = router;