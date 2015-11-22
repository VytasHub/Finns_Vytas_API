
var path = require('path');
var fs = require('fs');


var express = require('express')
   , app = module.exports = express()
   , nano = require('nano')('https://admin:a75695fd7905@couchdb-7c4dd5.smileupps.com')
   , request = require('request');

var db_name= 'crimedb';
var couchdb = nano.use(db_name);

var local;

//var data = fs.readFileSync('crime.json', 'utf8');
//var json = JSON.parse(data);

//nano.db.destroy('crimedb', function () {
//    // create a new database
//    nano.db.create('crimedb', function () {
//        // specify the database we are going to use
//        var alice = nano.use('crimedb');
//        // and insert a document in it
//        alice.insert(json, 'crime', function (err, body, header) {
//            if (err) {
//                console.log('[alice.insert] ', err.message);
//                return;
//            }
//            console.log('you have inserted the rabbit.')
//            console.log(body);
//        });


//    });
//});
//console.log(data.dataset.dimension.Country);

var data;


function getData(callback) {

    couchdb.get('income', { revs_info: true }, function (err, body) {
        if (!err)
            data = body;     
            local = true;
            callback();     
    });

}


app.set('view engine', 'jade');

app.get("/", function (request, response) {
    response.contentType('text/html');
    response.status(200).sendFile(path.join(__dirname + '/views/index.html'));
});

app.get("/crimeco", function (request, response) {
    response.contentType('text/html');
    response.status(200).sendFile(path.join(__dirname + '/views/crimeco.html'));
});
app.get("/crimeco/counties", function (request, response) {
    response.contentType('text/html');
    response.status(200).sendFile(path.join(__dirname + '/views/counties.html'));
});

app.get("/crimeco/crime", function (request, response) {
    response.contentType('text/html');
    response.status(200).sendFile(path.join(__dirname + '/views/crime.html'));
});

app.get("/scripts/counties.js", function (request, response) {
    response.contentType('text/js');
    response.status(200).sendFile(path.join(__dirname + '/views/scripts/counties.js'));
});
 
app.use(function (req, res, next) {

   // Website you wish to allow to connect
   res.setHeader('Access-Control-Allow-Origin', '*'); // null or url

   // Request methods you wish to allow
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

   // Request headers you wish to allow
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

   // Set to true if you need the website to include cookies in the requests sent
   // to the API (e.g. in case you use sessions)
   res.setHeader('Access-Control-Allow-Credentials', true);

   // Pass to next layer of middleware
   next();
});

app.all('/crimeco/*/', function (req, res, next) {
    if (!local) {
        getData(function () {
            next();
        });
    }
    else {
        next();
    }
});

app.get('/crimeco/counties/:id', function (request, response) {

    if(data != undefined)
        response.send(data.dataset.dimension["County and Region"].category.label[request.params.id]);
    else
        response.send("No Data :/")
});


app.get('/crimeco/countiesdata', function (request, response) {
   
    if(data != undefined)
    {
        response.send(data.dataset.dimension["County and Region"].category.label);
    }
        
    else
        response.send("No Data :/");
});



app.post('/crimeco/crime/', function (request, response) {

    var body = '';

    request.on('data', function (data) {
        body += data;
    });
    console.log("I am here");
    request.on('end', function () {
        var post = JSON.parse(body);

        console.log("Crime: " + post.crime + "   Location: " + post.location);
    });

});



app.listen(3333);
console.log("server is on port 3333");