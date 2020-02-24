(function() {
    
    'use strict';
    
    var app = angular.module('app', []);
    
    app.controller('HomeController', HomeController);
    
    function HomeController($scope, $http) {
        $scope.myCheck = false;
        $scope.data = [];
        
        getData();
        
        function getData() {
            $http.get("data/data.json")
            .then(function(response) {
                $scope.data = response.data;
            });
        }
    }
    
})();