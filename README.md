AngularAjaxComboBox
===================
  
To use:

    <!DOCTYPE html>
    <html>
    <head lang="en">
        <meta charset="UTF-8">
        <title></title>
      
        <script src="Scripts/angular.min.js"></script>
        <script src="Scripts/angular-resource.min.js"></script>
      
        <link rel="stylesheet" href="Content/bootstrap.min.css" />
      
        <link rel="stylesheet" href="Content/kel.ui.css" />
        <script src="Scripts/kel.ui.js"></script>
      
        <script src="Scripts/app.js"></script>
      
      
    </head>
    <body ng-app="TheApp" ng-controller="TheController as c">
      
        <h3>Angular Ajax Combobox Demo</h3>
      
        <div>PersonId chosen: {{c.personId}}</div>
        <br />
        <div style="float: left">Person name:&nbsp;</div>
        <kel-ajax-combobox ng-model="c.personId"
                           user-input="c.personName"
                           result-getter="c.resultGetter"
                           result-list="c.resultList"
                           result-total-rows="c.resultTotalRows"
                           selected-value="'id'"
                           selected-text="'fullName'"
        ></kel-ajax-combobox>
      
    </body>
    </html>
  
app.js definition. add the 'kel.ui' on the module's dependencies

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
                return dataRest.get({ userInput : e.userInput, pageNumber : e.pageNumber, pageSize : e.pageSize }, function(result) {
                    vm.resultList = result.persons;
                    vm.resultTotalRows = result.totalRows;
                });
        };
    
    }]);  
  
To change the width of the combox add a width attribute, e.g.,

    <kel-ajax-combobox ng-model="c.personId"
           user-input="c.personName"
           result-getter="c.resultGetter"
           result-list="c.resultList"
           result-total-rows="c.resultTotalRows"
           selected-value="'id'"
           selected-text="'fullName'"
           width="'350px'"
           page-size=20
      ></kel-ajax-combobox>
