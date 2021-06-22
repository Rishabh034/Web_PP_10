//const { delete, delete } = require("request");

// Setup
var recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if(records.hasOwnProperty(id))
    {
        let d=[];
        if(records[id].hasOwnProperty(prop))
        {
          //  console.log("Rishabh");
            if(typeof(records[id][prop])===typeof(d))
            {
               // console.log("Rishabh");
                if(value)
                records[id][prop].push(value);
                else
                delete records[id][prop];
            }
            else
            {
               if(value!="")
                records[id][prop]=value;
              else
                delete records[id][prop];
            }   
                 
            
           
        }
        else
        {
            if(prop==='tracks')
            {
                records[id][prop]=[value];
            }
            else
            records[id][prop]=value;
        }
    }
    return records;
  }
  
//  
let e=updateRecords(recordCollection, 2468, "tracks", "")
 let g=updateRecords(recordCollection, 2548, "artist", "");
 console.log(e);