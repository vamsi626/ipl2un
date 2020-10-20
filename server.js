const fs = require("fs");
const csv = require("csvtojson");
const MATCHES_FILE_PATH="./csv_data/matches.csv";
const DELIVERIES_FILE_PATH="./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data1.json";
const expressEco=require("./ipl/expressEco");
const express=require("express");
const app=express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  res.sendFile(index.js)
})
app.post("/name",function(req,res)
{
  console.log(req.body);
  var year1=parseInt(req.body.year);
  console.log(year1);
  console.log(typeof(year1));
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
        .fromFile(DELIVERIES_FILE_PATH)
        .then(deliveries => {
           let result3=expressEco(matches,deliveries,year1);
           console.log(result3);
           saveexpresseco(result3);
           res.json({"eco":result3});
        });
    });
});

function saveexpresseco(result) {
  jsonData = {
   expressEco: result
 };
 const jsonString = JSON.stringify(jsonData);
 fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
   if (err) {
     console.error(err);
   }
 });
}
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});