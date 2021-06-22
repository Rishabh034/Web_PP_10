let fs=require("fs");

let p= new Promise(function executor(resolve,reject)
{
  fs.readFile("f2.txt",function(err,data)
  {
    if(err)reject(err);
    else resolve(data);
  });
});

p.then(function(data)
{
  console.log(data+"");
});

p.catch(function(err)
{
    console.log("Rishabh");
    console.log(err);
});