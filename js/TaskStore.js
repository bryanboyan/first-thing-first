/**
 * Dependency: Task.js, Const.js, Storage.js
 */
(function(exports) {
'use strict';

function TaskStore(taskByID) {
	// listen to actions that dispatched from other
	// update
	
	this._taskByID = taskByID || {};
	var taskList = [];
	for (var id in this._taskByID) {
		taskList.push(this._taskByID[id]);
	}
	this._taskList = taskList;
	
	this.handlerIDs = []; 
	this.handlerIDs.push(Dispatcher.register(Const.Events.TASK_CREATE, function(action) {
	}));
	this.handlerIDs.push(Dispatcher.register(Const.Events.TASK_UPDATE_QUADRANT, function(action) {
		console.log('get task update quadrant event dispached');
		this.updateTaskQuadrant(action.taskID, action.quadrant);
	}));

	Subscriber.registerPublisher(this, 'TaskStore');
}
TaskStore.initTaskStore = function(){
	// based on user data, initialize task store
	var tasks = Storage.getAllTasks();
	var taskByID = {};
	tasks.forEach(function(task) {
		var taskObj = new Task(task);
		taskByID[task.id] = taskObj;
	});
	return new TaskStore(taskByID);
}
TaskStore.prototype.getTaskByID = function(id) {
};
TaskStore.prototype.getTasksByQuadrant = function(quadrant) {
	return this._taskList.filter(function(t) {
		return (t.quadrant == quadrant);
	});
};
TaskStore.prototype.updateTaskQuadrant = function(id, quadrant) {
	var t = this._taskByID[id];
	if (t) {
		t.updateTask({quadrant: quadrant});
	}
};
TaskStore.prototype.removeListener = function() {
	this.handlerIDs.forEach(function(id) {
		Dispatcher.unregister(id);
	});
};

exports.TaskStore = TaskStore.initTaskStore();
})(window)