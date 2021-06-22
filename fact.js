const fs=require("fs");

let fikadata=fs.readFileSync("./efg.txt","utf-8");
console.log(fikadata);

fs.writeFileSync("html.txt","I am Rishabh Mishra");
fs.writeFileSync("./sfg.html","i am a html");