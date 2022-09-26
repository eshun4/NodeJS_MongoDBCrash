// /Let's create our first server
const http = require('http');
const dotenv = require("dotenv");
dotenv.config();
const fs = require('fs');

//This creqates the server from the http 
const server = http.createServer((req, res) => {
    if(req.url === '/home'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('../Study_1/page/home.html', 'utf8', (err,data) => {
            console.log(data);
            if (err) throw err;
            res.write(data);
            res.end();
        })
    } else if(req.url === '/about'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('temp/test.html', 'utf8', (err,data) => {
            console.log(data);
            if (err) throw err;
            res.write(data);
            res.end();
        }); 
    }
    else if(req.url === '/create-file'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        for (let index = 0; index < 100; index++) {
            fs.appendFile('temp/test.html', '<h1>This is a test file</h1>', (err) => {
                if (err) throw err;
                res.write('File is created.');
                res.end();
            }); 
            
        }
        fs.appendFile('temp/test.html', '<h1>This is a test file</h1>', (err) => {
            if (err) throw err;
            res.write('File is created.');
            res.end();
        }); 
    }
    else{
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('../Study_1/page/404.html', 'utf8', (err,data) => {
            console.log(data);
            if (err) throw err;
            res.write(data);
            res.end();
        });
    }
  });
  
  console.log("The Server is running on port http://localhost:" + process.env.PORT);
  server.listen(process.env.PORT);

// const Circle = require("./circle");
// const circle = new Circle();


// console.log(circle.area(5));
// console.log(circle.circumference(5));
