
var path = require('path');
var fs = require('fs');

var express = require('express')
   , app = module.exports = express()
   , nano = require('nano')('https://admin:a75695fd7905@couchdb-7c4dd5.smileupps.com')
   , request = require('request');

//var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

var db_name = 'my_couch';

var couchdb = nano.use(db_name);

var local;


//console.log(data.dataset.dimension.Country);


function getData(){
    couchdb.get('this_is_the_document', { revs_info: true }, function (err, body) {
        console.log("Error: " + err + "\nbody: " + body);
        if (!err)
            //console.log(body.dataset.dimension.Country);
            data = body;
            
            local = true;
        // fs.writeFileSync('newJson.json', data.dataset);
    });

}

//console.log(get_type(data));
//nano.db.destroy(db_name, function () {
//    // create a new database
//    nano.db.create(db_name, function () {
//        // specify the database we are going to use
//        var couchdb = nano.use(db_name);
//        // and insert a document in it
//        couchdb.insert(data, 'this_is_the_document', function (err, body, header) {
//            if (err) {
//                console.log('what?', err.message);
//                return;
//            }
//            console.log('you have inserted the rabbit.')
//            console.log(body);
//        });
//    });
//});

app.set('view engine', 'jade');

app.get("/", function (request, response) {
    response.contentType('text/html');
    response.status(200).sendFile(path.join(__dirname + '/views/index.html'));
});

app.get("/crimeco", function (request, response) {
    response.contentType('text/html');
    response.status(200).sendFile(path.join(__dirname + '/views/crimeco.html'));
});
 

app.get('/:id', function (request, response) {
    console.log(request.params.id);
    if(!local)
    {
       getData();
    }
    else {

    }

    var result;
    response.status(200).json(request.params.id);
});


app.listen(3333);
console.log("server is on port 3333");