/**
 * Dependency: Task.js, Const.js, Storage.js
 */
(function(exports) {
'use strict';

function TaskStore(taskList) {
	// listen to actions that dispatched from other
	// update
	
	this._taskList = taskList || [];
	
	this.handlerIDs = []; 
	this.handlerIDs.push(Dispatcher.register(Const.Events.TASK_CREATE, function() {

	}));
	this.handlerIDs.push(Dispatcher.register(Const.Events.TASK_UPDATE
	));
}
TaskStore.initTaskStore = function(){
	// based on user data, initialize task store
	var tasks = Storage.getAllTasks();
	var taskList = [];
	tasks.forEach(function(task) {
		taskList.push(new Task(task));
	});
	return new TaskStore(taskList);
}
TaskStore.prototype.getTaskByID = function(id) {
};
TaskStore.prototype.getTasksByQuadrant = function(quadrant) {
	return this._taskList.filter(function(t) {
		return (t.quadrant == quadrant);
	});
};
TaskStore.prototype.updateTaskByID = function(id, updateObj) {

};
TaskStore.prototype.removeListener = function() {
	this.handlerIDs.forEach(function(id) {
		Dispatcher.unregister(id);
	});
};

exports.TaskStore = TaskStore.initTaskStore();
})(window)