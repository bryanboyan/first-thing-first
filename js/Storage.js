(function (exports){
'use strict';

function Storage() {
	Dispatcher.register(Const.Events.TASK_SAVE, function(taskObj) {

	});
}
Storage.prototype.getAllTasks = function() {
	var tasks = [
		{
			id: 1,
			quadrant: 1,
			title: "I am important and urgent"
		},
		{
			id: 2,
			quadrant: 1,
			title: "I am important and urgent as well"
		},
		{
			id: 3,
			quadrant: 4,
			title: "I am not important but urgent"
		},
		{
			id: 4,
			quadrant: 2,
			title: "I am important but not urgent, I am what you wanna focus on"
		},
		{
			id: 5,
			quadrant: 3,
			title: "I am not important and not urgent, you should never deal with me"
		}
	];
	return tasks;
}
Storage.prototype.genAllTasks = function(cb) {
	cb(this.getAllTasks());
}

exports.Storage = new Storage();

})(window);