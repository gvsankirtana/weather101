const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
})
app.post("/", function(req,res){//sending data to the server
    const query = req.body.cityName;//user entered name from input
    const apiKey = "f17ac4078d2b7f96c7d3976cdefababc";//api key generated
    const unit = "metric";//values to be shown in metrics
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid=" +apiKey +"&units="+ unit;//to take up the values accroding to user needs
    https.get(url,function(response){//gets the data from the url
    console.log(response.statusCode);//show the status code to check whether it's not 404,if 200 then success message
    response.on("data",function(data){//get the data
     const weatherData=JSON.parse(data);// data covert it into a javascript objecy
      //get the data from the api
     const temp = weatherData.main.temp;
     const weatherDescription = weatherData.weather[0].description;
     const Icon = weatherData.weather[0].icon;
     const imageUrl="http://openweathermap.org/img/wn/" + Icon +"@2x.png"
     //to post the answer to the user side
     res.write("<h1>the temperature in " + query +" is "+ temp +" degree celcius</h1>");
     res.write("<h3>the current weather is like "+ weatherDescription + "</h3>");
     res.write("<img src=" + imageUrl+  ">");
     res.send();// to end the sending of data
    })
    })
});

app.listen(3000,function(params){
  console.log("server running on port 3000");
})

