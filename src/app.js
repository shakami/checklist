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
            $http.get("https://api.jsonbin.io/b/5e536bcbd3c2f35597f6cb59/latest")
            .then(function(response) {
                $scope.data = response.data;
            });
        }
        
        function updateData() {
            var req =
            {
                method: 'PUT',
                url: 'https://api.jsonbin.io/b/5e536bcbd3c2f35597f6cb59',
                headers: { 'Content-Type': 'application/json' },
                data: $scope.data
            };

            $http(req)
                .then(function() {
                getData();
            });
            
        }
    }
    
})();