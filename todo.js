var app = angular.module('todoApp', []);

app.controller('TodoCtrl', function ($scope) {
    $scope.todos = [];
    $scope.addTodo = function () {
        $scope.todos.push({text: $scope.task, done: false});
        $scope.task = '';
    };

    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };

    $scope.clearCompleted = function () {
        $scope.todos = $scope.todos.filter(todo => !todo.done);
    };

    $scope.disableClear = function () {
        return $scope.todos.filter(todo => todo.done).length <= 0;
    };
})
