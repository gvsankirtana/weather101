const express = require("express");
const https = require("https");
const app = express();
app.get("/",function(req,res){
   
})
const query = "London"
const apiKey = "f17ac4078d2b7f96c7d3976cdefababc"
const unit = "metric"
//const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey+"&unit="+unit;
    //https.get(url,function(response){
        //console.log(response.statusCode);
    //response.on("data",function(data){
     //const weatherData=JSON.parse(data);
     //const temp = weatherData.main.temp;
     //const weatherDescription = weatherData.weather[0].description;
     //const Icon = weatherData.weather[0].Icon;
     //const imageUrl="http://openweathermap.org/img/wn/" + Icon +"@2x.png"
     //res.write("<h3> the current weather is like"+ weatherDescription +"<h3>");
     //res.write("<h1> the temperature is"+temp);
     //res.write("<img src=" +imageUrl+  ">");
     //res.send();
    //})
    //})
app.listen(3000,function(params){
  console.log("server running on port 3000");
})

