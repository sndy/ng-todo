'use strict';


var app = angular.module('todoApp', []);

app.controller('TodoCtrl', function ($scope) {
    let taskList = localStorage['taskList'];
    $scope.todos = taskList !== undefined ? JSON.parse(taskList) : [];

    $scope.addTodo = function () {
        $scope.todos.push({text: $scope.task, done: false});
        $scope.task = '';

        $scope.updateTaskList($scope.todos);
    };

    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };

    $scope.clearCompleted = function () {
        if (confirm('Are you sure you want to clear the completed task(s)?')) {
            $scope.todos = $scope.todos.filter(todo => !todo.done);
            $scope.updateTaskList($scope.todos);
        }
    };

    $scope.disableClear = function () {
        return $scope.todos.filter(todo => todo.done).length === 0;
    };

    $scope.updateTaskList = function (taskList) {
        localStorage['taskList'] = JSON.stringify($scope.todos);
    }
});
