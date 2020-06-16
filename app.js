const express = require("express");
const https = require("https");
const app = express();
app.get("/",function(req,res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=f17ac4078d2b7f96c7d3976cdefababc"
    https.get(url,function(response){
        console.log(response.statusCode);
    response.on("data",function(data){
     const weatherData=JSON.parse(data);
    })
    })
    res.send("server is up and running");
})
app.listen(3000,function(params){
  console.log("server running on port 3000");
})

