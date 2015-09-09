var fs = require("fs");
// var contents = fs.readFileSync(process.argv[2]);
var http = require("http");
var newData = [];

// console.log(contents.toString().split("").reduce(function(count, character) { 
//   if (character === '\n') count++;
//   return count;
// }, 0));


http.get("http://omdbapi.com/?i=tt1392190", function(res){
    res.setEncoding("utf8");
    res.on("data", function(data){
      
        newData.push(data.toString());
    });
 
    res.on("end", function(){
    	 http.get("http://omdbapi.com/?i=tt0295297", function(res){
    	     res.setEncoding("utf8");
    	     res.on("data", function(data){
    	       
    	         newData.push(data.toString());
    	     });
    	  
    	     res.on("end", function(){
    	     	  console.log(newData);
    	       
    	     });
    	 });
      
    });
});

//Second Call

