var fs = require("fs");
var http = require("http");
var newData = [];


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

