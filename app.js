var app = angular.module('TheApp', ['ngResource', 'kel.ui']);



app.controller('TheController', ['$http', '$resource', function($http, $resource) {
    var vm = this;

    vm.personId = 5500;
    vm.personName = 'Aaron Butler';

    vm.resultList = [];
    vm.resultTotalRows = 0;

    var dataRest = $resource('http://localhost:63692/api/AdventureWorksPeople');

    vm.resultGetter = function(e) {
            // return  the promise
            return dataRest.get({ userInput : e.userInput, pageNumber : e.pageNumber }, function(result) {
                vm.resultList = result.persons;
                vm.resultTotalRows = result.totalRows;
            });
    };

}]);