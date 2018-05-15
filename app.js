const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/webApp";



MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("webApp");
    var query = {};
    dbo.collection("webApp").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result[0].Ss);
        db.close();
    });
});


//here we are connecting to our database which we created in mongoose.exe file after starting our database from mongod.exe
mongoose.connect("mongodb://localhost:27017/webApp");

var db = mongoose.connection;

// Check connection
db.once('open', function(){
    console.log('Connected to MongoDB');
});

// Check for DB errors
db.on('error', function(err){
    console.log(err);
});

// Init App
const app = express();

// Bring in Models
//var Article = require('./models/article');

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

//bring in mongoose model
var Bachelor = require("./config/bachelor");

// Home Route
app.get('/', function(req, res){
    res.render('index', {
        currentPage :'index'
    });
});

app.get('/bachelor', function(req, res){

    var names = ["Computer" , "Ss"];

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("webApp");
        var query = {};
        dbo.collection("webApp").find(query).toArray(function(err, result) {
            if (err) throw err;
            res.render('bachelor',{
                currentPage : 'bachelor',
                names : names ,
                bachelors : result[0].Ss.first
            });
            db.close();
        });
    });
});



// Start Server
app.listen(3000, function(){
    console.log('Server started on port 3000...');
});
