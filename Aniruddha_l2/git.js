const request = require("request");
const cheerio = require("cheerio");
const fs=require("fs");
const { default: jsPDF } = require("jspdf");
const doc=new jsPDF();
request("https://github.com/topics", cb);

function cb(err, res, body) {
   parsebody(body);
}

let da={};
let data={};

function parsebody(html) {
   let ch = cheerio.load(html);
   let topic = ch(".topic-box a");
   for (let i = 0; i < topic.length; i++) {
      let topicdata =ch(ch(topic[i]).find("p")[0]).text();
      let topiclinkname = ch(topic[i]).attr('href');
     //
      console.log("Name of the topic is->  " + data.trim());
       
      //console.log("Link of the topic is->  " + "https://github.com"+linkname);
     let url="https://github.com"+topiclinkname;
      topics(url,topicdata);
    // console.log(url);
   }
}

function topics(data,data1){
      request(data,function(err,res,body){
        let ch = cheerio.load(body);
          let obj =ch(".d-flex.flex-auto a");
        //  console.log("Rishabh");
          for(let i=1;i<10;i=i+2)
          {
           // console.log(ch(obj[i]).text().trim());
           // console.log("https://github.com"+ch(obj[i]).attr('href'));
            let url1="https://github.com"+ch(obj[i]).attr('href')+"/issues";
              issues(url1);
          }
        
      });
}
// let issue_name;
// let issue_Link;
function issues(html){
    request(html,function(err,res,body){
       let ch=cheerio.load(body);
         let obj=    ch(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");

         for(let i=0;i<5;i++)
         {
               let issue=(ch(obj[i]).text().trim());
               let issue_link=(ch(obj[i]).attr('href'));
               // doc.text(ch(obj[i]).text().trim(),1,2);   
               // doc.text(ch(obj[i]).attr('href'),2,3);
               // doc.save('issue.pdf');
               // da[issue_name]=issue;
               // da[issue_Link]=issue_link;
               da[issue]="https://github.com"+issue_link;
               topic[i].push(da);
               fs.writeFileSync('data.json',JSON.stringify(da));
               
         }
    });
}