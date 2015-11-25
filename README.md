# Finns_Vytas_API


![alt tag](https://raw.github.com/VytasHub/finns_vytas_api/master/screenhots/HomePage.png)


In this project me (Vytas Vaiciulis) and Finn Williams are going to use datasets from www.cso.ie website.
The datasets chosen for the project are as follows:

We want to combine these two datasets so we can link household income 14 types of income per county to amount of crime happening 70 different types of crime. And see insight into the data.

We are using couch DB to store JSON files which hosted on following website: www.smileupps.com


##Paths:
####Gets all the county’s
**req**  
`//crimeco/countiesdata`

**res** 
![alt tag](https://raw.github.com/VytasHub/finns_vytas_api/master/screenhots/exampleresponse.png)



/crimeco/countiesdata
####Gets county’s interface
**req**  
`/crimeco/counties`

**res** 
![alt tag](https://github.com/VytasHub/finns_vytas_api/blob/master/screenshots/countyInterface.png)


####Gets county by id
**req**  
`/crimeco/counties:id`

**res**  
```json
{"sample": "json"}
```

####An example for county id
**req**  
`/crimeco/counties/5003`

**res**  
```json
{"sample": "json"}
```

####Return different types of crime 
**req**  
`/crimeco/counties/crime`

**res**  
```json
{"sample": "json"}
```

####Gets different types of house hold income
**req**  
`/crimeco/income`

**res**  
```json
{"sample": "json"}
```

####Example
**req** 
`localhost:3333/crimeco/counties/5003`

**res**  




##Technology’s used
####Npm
Npm need to be installed first.npm stands for Node Package manager, and is the default package manager for the JavaScript runtime environment Node.js

www.npmjs.com

####Modules: 
#####Cors
Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the resource originated.
`npm install cors`
#####Express
The Express philosophy is to provide small, robust tooling for HTTP servers, making it a great solution for single page applications, web sites, hybrids, or public HTTP APIs.
`npm install express`
#####Nano
Minimalistic - there is only a minimun of abstraction between you and couchdb.
Pipes - proxy requests from couchdb directly to your end user.
`npm install nano`
#####Path
This module contains utilities for handling and transforming file paths. Almost all these methods perform only string transformations. The file system is not consulted to check whether paths are valid.
`npm install --save path`
#####Request
The simplest way to create HTTP requests in Node.js is by using the request module.
`npm install request`


####Front End
Front End
Used Bootstrap for design and Angular to format incoming json object ng-repeat came in very handy.

####Other Technologys used 
Ajax, JQuery,Node.js, Jade









