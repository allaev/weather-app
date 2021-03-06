var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res){
    res.render("index");
});

app.get("/results", function(req, res){
    var query = req.query.search;
    var url="http://api.openweathermap.org/data/2.5/weather?q="+query+"&units=imperial&appid=XXXX";
    
    request(url, function (error, response, body) {
      if(!error && response.statusCode == 200){
        var data = JSON.parse(body);
        res.render("results", {data:data});
        }
        else {
            res.redirect("/");
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Weather App has started!");
});