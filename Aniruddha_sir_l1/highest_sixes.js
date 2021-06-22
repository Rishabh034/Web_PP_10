const request=require("request");
const cheerio=require("cheerio");

request("https://www.espncricinfo.com/series/ipl-2021-1249214/punjab-kings-vs-delhi-capitals-29th-match-1254086/full-scorecard",cb);

function cb(err,res,body){
 parsebody(body);
}



function parsebody(html)
{
    let ch = cheerio.load(html);
      let batsmantable = ch(".table.batsman");
      let playername="";
      let noOfSixes=0;
      for(let i=0;i<batsmantable.length;i++)
      {
        let alltr =  ch(batsmantable[i]).find('tbody tr');

        for(let i=0;i<alltr.length;i=i+2)
        {
            let alltd=ch(alltr[i]).find("td");
          let  curr_playername=ch(alltd[0]).text();
          let  sixes=ch(alltd[6]).text();
            
          if(noOfSixes<sixes)
          {
              playername=curr_playername;
              noOfSixes=sixes;
          }
            
        }
      }

      console.log(playername);
      console.log(noOfSixes);
}