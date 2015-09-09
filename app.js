// boilerplate code
var express = require('express'),
	app = express(),
	fs = require('fs'),
	contents = fs.readFileSync("test.txt");


// Set view engine to ejs
app.set('view engine', 'ejs');





app.get('/:math/:a/:b', function (req, res){
	var math = req.params.math,
		a = parseFloat(req.params.a),
		b = parseFloat(req.params.b);
	if(math === "add"){
		math = "+";
	} else if (math === "sub"){
		math = "-";
	} else if (math === "mult"){
		math = "*";
	} else if (math === "div"){
		math = "/";
	}

	var c = eval(a + math + b);

	res.render('answer', {ans: c});
});



// app.get('/add/:a/:b', function (req, res){
// 	var c = parseFloat(req.params.a) + parseFloat(req.params.b);
// 	res.render('answer', {ans: c});
// });

// app.get('/sub/:a/:b', function (req, res){
// 	var c = parseFloat(req.params.a) - parseFloat(req.params.b);
// 	res.render('answer', {ans: c});
// });

// app.get('/mult/:a/:b', function (req, res){
// 	var c = parseFloat(req.params.a) * parseFloat(req.params.b);
// 	res.render('answer',{ans: c});
// });

// app.get('/div/:a/:b', function (req, res){
// 	var c = parseFloat(req.params.a) / parseFloat(req.params.b);
// 	res.render('answer', {ans: c});
// });








// start server
app.listen(3000, function(){
	console.log('Server running on port 3000');
});

