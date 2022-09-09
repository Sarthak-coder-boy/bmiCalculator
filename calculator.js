//jshint esversion:6

const exp = require("express");
const app = exp();
const bodyParser =require("body-parser"); // use to parse the request values coming from the site

 
app.use(bodyParser.urlencoded({extended: true})) //to use body parser

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
    
});

app.post("/",function(req, res){
  
    var num1=Number(req.body.n1);
    var num2=Number(req.body.n2);

    var result = num1 + num2;

    res.send("Result is "+result);
    
});
    
    app.get("/bmi", function(req, res){
        res.sendFile(__dirname+"/bmicalculator.html"); // __dirname gives the path of file useful when we host the website
    });
    

    app.post("/bmi",function(req, res){
      
        var w=parseFloat(req.body.weight); // parseFloat is to convert text in decimal
        var h=parseFloat(req.body.height);
    
        var bmi =w/(h*h);
    
        res.send("BMI is "+bmi);
    });


app.listen(3000, function(){
    console.log("Server Started");
});