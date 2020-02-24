(function() {
    
    'use strict';
    
    var app = angular.module('app', []);
    
    app.controller('HomeController', HomeController);
    
    function HomeController($scope, $http) {
        $scope.myCheck = false;
        $scope.data = [];
        $scope.updateData = updateData;
        $scope.editing = false;
        $scope.toggleEdit = toggleEdit;
        $scope.save = save;
        $scope.newItem = { "value": false };
        $scope.adding = false;
        $scope.toggleAdd = toggleAdd;
        $scope.add = add;
        $scope.deleteItem = deleteItem;
        
        
        getData();
        
        function getData() {
           var req =
            {
                method: 'GET',
                url: 'https://api.jsonbin.io/b/5e536bcbd3c2f35597f6cb59/latest',
                headers: { 'Accept': 'application/json', 'Cache-Control': 'no-cache' }
            };
            
            $http(req)
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
        
        function toggleEdit() {
            $scope.editing = !$scope.editing;
        }
        
        function save() {
            updateData();
            toggleEdit();
        }
        
        function toggleAdd() {
            $scope.adding = !$scope.adding;
        }
        
        function add() {
            if($scope.newItem.name) {
                $scope.data.push($scope.newItem);
                updateData();
                toggleAdd();
            } else {
                toggleAdd();
            }
        }
        
        function deleteItem(item) {
            var i = $scope.data.indexOf(item);
            if (i > -1) {
                $scope.data.splice(i, 1);
                updateData();
            }
            toggleEdit();    
        }
    }
    
})();