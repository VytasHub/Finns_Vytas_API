
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
        console.log(err + "\nbody: " + body);
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
 

app.get('/crimeco/counties/:id', function (request, response) {

    var result;

    if(!local)
    {
        getData(function () {

            response.send(data.dataset.dimension["County and Region"].category.label[request.params.id]);
                
            });        
    }
    else {
        response.send(data.dataset.dimension["County and Region"].category.label[request.params.id]);
    }

    console.log(result);

    response.send(result);
    //response.status(200).json(request.params.id);
});

app.get('/crimeco/counties/', function (request, response) {

    if (!local) {
        getData(function () {
            response.send(data.dataset.dimension["County and Region"].category.label);
        });
    }
    else {
        response.send(data.dataset.dimension["County and Region"].category.label);
    }

    //response.status(200).json(request.params.id);
});


app.listen(3333);
console.log("server is on port 3333");