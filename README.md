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
  
To change the width of the combox add a width attribute, e.g.,

  <kel-ajax-combobox ng-model="c.personId"
         user-input="c.personName"
         result-getter="c.resultGetter"
         result-list="c.resultList"
         result-total-rows="c.resultTotalRows"
         selected-value="'id'"
         selected-text="'fullName'"
         width="'350px'"
    ></kel-ajax-combobox>
