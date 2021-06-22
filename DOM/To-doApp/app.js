let input=document.querySelector("input");
let buttontag=document.querySelector("button");
let ul =document.querySelector("ul");
 
 //let text = inputtag.value;
buttontag.addEventListener("click", function(){
    let task = input.value;
   // input.value="";
    if(input.value=="")
     return;
     input.value="";
    let li=document.createElement("li");
    li.innerText=task;
    
     li.addEventListener("dblclick",function(){
        li.remove()
     })
    ul.append(li);
})