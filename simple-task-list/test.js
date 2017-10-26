angular
    .module('taskList',[])
    .controller("TaskController",TaskController);

function TaskController(){
    
    var vm = this;
    
    //Title for Task List
    vm.title = "Task Manager";
    
    //Array of demo task
    vm.tasks = [
        {'title':'A default item', 'done':false},
        {'title':'A second item', 'done':false}
    ];
    
    //Add new tasks
    vm.addTask = function(){
        vm.tasks.push(
            {'title':vm.newTask,'done':false}
        );
        vm.newTask = '';
    };
    
    //clear complated tasks
    vm.clearCompleted = function(){
        vm.tasks = vm.tasks.filter(function(task){
            return !task.done;
        });
    };
}