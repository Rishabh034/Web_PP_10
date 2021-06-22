/*let promise=new Promise(function (resolve,reject)
{
  // reject("Rejected!");
   resolve("Successful!");
});

promise.catch(function (err)
{
    console.log(err);
});*/
let fs=require("fs");
function f(path){
    return new Promise(function (resolve,reject){
        fs.readfile(path,function(err,data){
        if(err)
            reject(err);
            else
             resolve(data);
        });
    });
}
let p=f("f1.txt");
p.then(function (data){
console.log(data);
 let p1=f("f2.txt")
  return p1;
})
 .then(function(data){
     console.log(data);
     let p2=f("f3.txt");
     return p2;
 })
 .then(function(data){
     console.log(data);
     //let p3=f("f3.txt");
     //return p3;
 })
//    .then(function(data){
//        console.log(data);
//    });