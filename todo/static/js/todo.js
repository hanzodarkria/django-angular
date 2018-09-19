var app = angular.module('toDo', []);
//app.config(function($httpProvider) {
//    $httpProvider.defaults.xsrfCookieName = 'csrftoken'
//    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken'
//});
app.controller('toDoController', function($scope, $http){ //under function are called dependency injection
//    $scope.todoList = [{todoText: 'Finish this app', done: false}]
    $http.get('/todo/api/').then(function(response){
        console.log('what is the response : ', response);
        $scope.todoList = response.data;
    })
    $scope.todoAdd = function(){
        $scope.todoList.push({
            text: $scope.todoInput,
            done: false
        });
        $scope.todoInput = '';
    };
    $scope.saveData = function(){
        var data = {
            text: $scope.todoInput,
            done: false
        };
        $http.put('/todo/api/', data)
    };
    $scope.remove = function(){
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x){
            if(!x.done){
                $scope.todoList.push(x);
            }else{
                $http.delete('/todo/api/'+x.id+'/')
            }
        });
    }
})