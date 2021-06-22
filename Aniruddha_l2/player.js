const request=require("request");
const cheerio=require("cheerio");

request("https://www.espncricinfo.com/series/ipl-2021-1249214/punjab-kings-vs-delhi-capitals-29th-match-1254086/full-scorecard",cb);

function cb(err,res,body){
    parsebody(body);
}

function parsebody(html){
    let ch=cheerio.load(html)
     let data =  ch(".Collapsible__contentInner tbody a.small");
     // let url;
     // let name;
     for(let i=0;i<data.length;i++)
     {             let url=ch(data[i]).attr('href');
        ddob("https://www.espncricinfo.com"+url,ch(data[i]).text());
        //et   name=ch(data[i]).text();
         // console.log(name);
          //console.log(url);
          //console.log("-------");
        //  let url1="https://www.espncricinfo.com"+url;
          
     }
   

    // ddob(name,url);
    //https://www.espncricinfo.com/player/prabhsimran-singh-1161024

}

function ddob(url,name)
{
    request(url,function(err,res,body){
      let ch=  cheerio.load(body);
      let obj=  ch(".player-card-padding h5");
      let data=ch(obj[1]).text();
      console.log(name);
      console.log(data);
      console.log("----------");

    });
   //  console.log(name);
   
}

// function cb1(err,res,body){
//     parsebody1(body);
// }

// function parsebody1(html){
//     let ch=cheerio.load(html);
//       let obj=  ch(".player-card-padding h5");
//       let data=ch(obj[1]).text();
//       console.log(data);
//       console.log("----------");
      
// }