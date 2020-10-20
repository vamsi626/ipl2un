const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWon=require("./ipl/matchesWon");
const extraRuns2016=require("./ipl/extraRuns2016");
const economicBowlers2015=require("./ipl/economicBowlers2015");
const story=require("./ipl/story");
const MATCHES_FILE_PATH="./csv_data/matches.csv";
const DELIVERIES_FILE_PATH="./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";



function main()
{
    csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
        
        let result = matchesPlayedPerYear(matches);
        saveMatchesPlayedPerYear(result);
        let result1=matchesWon(matches);
        saveMatchesWon(result1);
        let result2=story(matches);
        console.log(result2);
        savestory(result2);


        
        
    });
}
function main1()
{
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
        .fromFile(DELIVERIES_FILE_PATH)
        .then(deliveries => {
          
          console.log(matches.slice(0,5),"matches");
          console.log(deliveries.slice(0,5),"deliveries");
          let result2 = extraRuns2016(matches,deliveries);
          
           saveExtraRuns2016(result2);
           let result3=economicBowlers2015(matches,deliveries);
           
           saveEconimicBowlers2015(result3);
        });
    });
}

function saveMatchesPlayedPerYear(result) {
     jsonData = {
      matchesPlayedPerYear: result
    };
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
      if (err) {
        console.error(err);
      }
    });
  }
function saveMatchesWon(result) 
{
     jsonData.matchesWon=result;
    
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
      if (err) {
        console.error(err);
      }
    });
}
function saveExtraRuns2016(result) 
{
     jsonData.etraRuns2016=result;
    
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
      if (err) {
        console.error(err);
      }
    });
}
function saveEconimicBowlers2015(result) 
{
     jsonData.econimicBowlers2015=result;
    
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
      if (err) {
        console.error(err);
      }
    });
}
function savestory(result) 
{
     jsonData.story=result;
    
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
      if (err) {
        console.error(err);
      }
    });
}
main();
main1();
