var fs = require("fs");
var contents = fs.readFileSync(process.argv[2]);
var http = require("http");
var newData = [];

console.log(contents.toString().split("").reduce(function(count, character) { 
  if (character === '\n') count++;
  return count;
}, 0));




//Second Call

