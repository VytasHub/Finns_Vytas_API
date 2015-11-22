//var express = require('express')
var app = angular.module('myApp', []);


app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);



app.controller('customersCtrl', function ($scope, $http) {

    $http.get("http://localhost:3333/crimeco/countiesdata")
    .success(function(response) {$scope.names = response});
	//response.send(data.dataset.dimension["County and Region"].category.label)
});



