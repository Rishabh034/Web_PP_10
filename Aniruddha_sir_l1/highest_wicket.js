const request=require("request");
const cheerio=require("cheerio");

request("https://www.espncricinfo.com/series/ipl-2021-1249214/punjab-kings-vs-delhi-capitals-29th-match-1254086/full-scorecard",cb);


function cb(err,res,body){
    parsebody(body);
}


function parsebody(html){

    let ch=cheerio.load(html);
     let obj = ch('.table.bowler');
     let playername="";
     let maxwicket=0;
     for(let j=0;j<obj.length;j++){

     let trkadata=ch(obj[j]).find("tbody tr");
     console.log(trkadata.length);
     for(let i=0;i<trkadata.length;i++)
  {
       let data=  ch(trkadata[i]).find("td");
      // console.log(data);
       let curr_player=ch(data[0]).text();
       let wicket=ch(data[4]).text();
       if(maxwicket<wicket)
       {
           playername=curr_player;
           maxwicket=wicket
       }
       // console.log("------------------");
     }
    //  console.log(playername);
    //  console.log(maxwicket);
}
console.log(playername);
console.log(maxwicket);
}