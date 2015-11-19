//var express = require('express')
var app = angular.module('myApp', []);


app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);



app.controller('customersCtrl', function($scope, $http) {
	//http://localhost:3333/crimeco/counties
	//http://www.w3schools.com/angular/customers.php
    $http.get("http://localhost:3333/crimeco/counties")
    .success(function(response) {$scope.names = response});
	//response.send(data.dataset.dimension["County and Region"].category.label)
});



