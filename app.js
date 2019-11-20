const express=require("express");
const faker = require("faker");
const app=express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));
var date;

app.get("/", function(req,res){
    res.render("index.html", {date:faker.date.weekday()});
});

app.get("/malware", function(req,res){
    res.render("Malware.html", {date:faker.date.weekday()});
});

app.get("/phishing", function(req,res){
    res.render("Phishing.html", {date:faker.date.weekday()});
});

app.get("/ransomware", function(req,res){
    res.render("Ransomware.html", {date:faker.date.weekday()});
});

app.get("/sengineering", function(req,res){
    res.render("Social_Engineering.html", {date:faker.date.weekday()});
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Express Server is Running...");
});


