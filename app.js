var app = angular.module('TheApp', ['ngResource', 'kel.ui']);



app.controller('TheController', ['$http', '$resource', function($http, $resource) {
    var vm = this;

    vm.x = {};

    vm.personId = 5500;
    vm.personName = 'Aaron Butler';

    vm.resultList = [];
    vm.resultTotalRows = 0;

    var dataRest = $resource('http://localhost:50544/api/AdventureWorksPeople');

    vm.resultGetter = function(e) {
        return dataRest.get({ userInput : e.userInput, pageNumber : e.pageNumber, pageSize : e.pageSize }, function(result) {
            vm.resultList = result.persons;
            vm.resultTotalRows = result.totalRows;
        });
    };

    //// This works too:

    //vm.resultGetter = function(e) {
    //        return dataRest.get({ userInput : e.userInput, pageNumber : e.pageNumber, pageSize : e.pageSize }).$promise.then(function(result) {
    //            vm.resultList = result.persons;
    //            vm.resultTotalRows = result.totalRows;
    //        });
    //};


    vm.theValueChanged = function() {
        console.log('hey')
    };

}]);