function TodoCtrl($scope) {
	$scope.state = {editing: 0};
	$scope.todos = [
		{name: 'Todo 1'}
		, {name: 'Todo 2'}
		, {name: 'Todo 3'}
		, {name: 'Todo 4'}
		, {name: 'Todo 5'}
		];
	
	$scope.addTodo = function() {
		$scope.todos.push({name:''});
	};
};
