
var app = angular.module('app', ['ui.bootstrap']);


app.controller('HomeController', function($scope, $http) {
  $scope.filteredTodos = [],
  $scope.currentPage = 1,
  $scope.numPerPage = 10,
  $scope.maxSize = 5,
  $scope.todos = [],


  $scope.getando = function () {
        $http.get("https://jsonplaceholder.typicode.com/posts/").then(function(response){
            $scope.todos = response.data;
        }, function(error){
            //Error
        });
    };


  $scope.makeTodos = function() {
    for (var i=1;i<=1000;i++) {
      $scope.todos.push({ text:'todo '+ i, done:false});
    }
  };
  //$scope.makeTodos(); 
  $scope.getando();
  
  $scope.numPages = function () {
    return Math.ceil($scope.todos.length / $scope.numPerPage);
  };
  
  $scope.$watch('currentPage + numPerPage', function() {
    var begin = (($scope.currentPage - 1) * $scope.numPerPage)
    , end = begin + $scope.numPerPage;
    
    $scope.filteredTodos = $scope.todos.slice(begin, end);
  });


  

});
    
    
  

