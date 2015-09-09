// boilerplate code
var express = require('express'),
	app = express(),
	fs = require('fs'),
	contents = fs.readFileSync("test.txt");

// function start(resp) {
//     resp.writeHead(200, {
//         "Content-Type": "text/html"
//     });
//     fs.readFile(filename, "utf8", function(err, data) {
//         if (err) throw err;
//         resp.write(data);
//         resp.end();
//     });
// }

// Set view engine to ejs
app.set('view engine', 'ejs');

// var vegetables = ["carrots", "peas", "cucumber", "lettuce"];



// // "GET" request to '/' runs the function  below
// app.get('/',function (req, res){
// //this will repsond with hello world!
// 	res.render('index', {veggies: vegetables});

// });

// "GET" request to '/' runs the function  below
// app.get('/',function (req, res){
// //this will repsond with hello world!
// 	res.render('index', {name: "Donte"});

// });

// app.get('/veggies', function (req,res){
// 	res.send(vegetables.join(","));
// });

// app.get('/hello/:name', function (req, res){
// 	res.send('Hello,  ' + req.params.name);

// });

// app.get('/hi', function (req,res){
// 	var name = req.query.name;
// 	res.send('Hello,' + name);
// });



// start server
app.listen(3000, function(){
	console.log('Server running on port 3000');
});

