# Finns_Vytas_API

In this project me (Vytas) and Finn are going to use datasets from www.cso.ie website.
The datasets chosen for the project are as follows:

We want to combine these two datasets so we can link household income 14 types of income per county to amount of crime happening 70 different types of crime. And see insight into the data.

We are using couch DB to store JSON files which hosted on following website: www.smileupps.com


##Paths:

####Gets all the county’s
`/crimeco/counties`

####Gets county by id
`/crimeco/counties:id`

####An example for county id
`/crimeco/counties/5003`

####Return different types of crime 
`/crimeco/counties/crime`

####Gets different types of house hold income
`/crimeco/income`

####Example
`localhost:3333/crimeco/counties/5003`

![HartChaser Logo](https://github.com/VytasHub/UnityGameBrowser/blob/master/FinishedBrowser/Assets/MainLogo.png "HartChaser")


##Technology’s used
#####Modules: 
Cors, Express, Nano, Path, Request

####Others
Angular, Ajax, JQuery, Bootstrap, Node.js, Jade







