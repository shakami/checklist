(function() {
    
    'use strict';
    
    var app = angular.module('app', []);
    
    app.controller('HomeController', HomeController);
    
    function HomeController($scope, $http) {
        $scope.myCheck = false;
        $scope.data = [];
        $scope.updateData = updateData;
        
        getData();
        
        function getData() {
            $http.get("data/data.json")
            .then(function(response) {
                $scope.data = response.data;
            });
        }
        
        function updateData() {
            var req =
            {
                method: 'POST',
                url: 'data/data.json',
                headers: { 'Accept': 'application/json', 'Cache-Control': 'no-cache', 'Content-Type': 'application/json' },
                data: $scope.data
            };

            $http(req)
                .then(function() {
                getData();
            });
            
        }
    }
    
})();