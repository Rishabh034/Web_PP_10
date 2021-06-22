const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");

request('https://github.com/topics', function (err, res, body) {
    parsedata(body);
});

function parsedata(html) {
    let ch = cheerio.load(html);
     let data=ch(".container-lg p-responsive mt-6");
     console.log(data+"");
    

}

