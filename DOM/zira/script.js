let btn=document.querySelector(".add");
let body=document.querySelector("body");
let grid=document.querySelector(".grid");

btn.addEventListener("click",function(){
    let div=document.createElement("div");
    div.classList.add("modal");
    div.innerHTML=`<div class="task-section">
        <div class="task-inner-section" contenteditable="true"></div>
    </div>
    <div class="modal-priority-section">
        <div class="priority-inner-container">
            <div class="modal-priority pink"></div>
            <div class="modal-priority blue"></div>
            <div class="modal-priority green"></div>
            <div class="modal-priority black selected"></div>
        </div>
    </div>`;


let p=div.querySelectorAll(".modal-priority");
//console.log(p.length);
let ticketcolor="black";
for(let i=0;i<p.length;i++)
{    //console.log("Rishabh");
    p[i].addEventListener("click",function(e){
       // console.log("Mishra");
        for(let j=0;j<p.length;j++)
        {
          //  console.log(123);
            p[j].classList.remove("selected");
        }

        e.currentTarget.classList.add("selected");
        ticketcolor=e.currentTarget.classList[1];
    })
}
let t=div.querySelector(".task-inner-section");

t.addEventListener("keydown",function(e){

    if(e.key=="Enter")
    {
        
        let ticketdiv=document.createElement("div");
        ticketdiv.classList.add("ticket");
        
        ticketdiv.innerHTML=`<div class="ticket-color ${ticketcolor}"></div>
        <div class="ticket-id"> ${e.currentTarget.innerText}</div>
        <div class="actual-task"></div>`
        let colors=["pink","blue","green","black"];
       let ticketcolordiv=ticketdiv.querySelector(".ticket-color");
       
           ticketcolordiv.addEventListener("click",function(e){
             
               let index=-1;
               let curcolor=e.currentTarget.classList[1];
               for(let i=0;i<colors.length;i++)
               {
                  if(curcolor==colors[i]){
                    index=i;
                    break}
               }
               index++;
               index=index%4;
               let newcolor=colors[index];
               e.currentTarget.classList.remove(curcolor);
               e.currentTarget.classList.add(newcolor);
            })
        grid.append(ticketdiv);
        div.remove();
    }
    else if(e.key=="Escape")
    {
        div.remove();
    }
})

    

  

    
    body.append(div);
})

