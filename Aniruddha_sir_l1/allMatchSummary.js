const request=require("request");
const cheerio=require("cheerio");

request("https://stats.espncricinfo.com/ci/engine/records/team/match_results.html?id=13840;type=tournament",cb);

function cb(err,res,body){

parsebody(body);
}

function parsebody(html)
{
    let ch=cheerio.load(html);
    let stats = ch('.engineTable');
    let table=ch(stats[0]);
    let tr=ch(table).find("tbody tr");

    for(let i=0;i<tr.length;i++)
    {
        let alltd=ch(tr[i]).find("td");
        let teamName1=ch(alltd[0]).text();
        let teamName2=ch(alltd[1]).text();
        let results=ch(alltd[2]).text();
        console.log(teamName1);
        console.log(teamName2);
        console.log("winner of team is "+results);
        console.log("------------");
    }
   // console.table(data);
}