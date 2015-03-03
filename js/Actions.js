(function(exports) {
'use strict';

var Actions = {
	dragTaskInQuadrant: function(taskID, quadrant) {
		Dispatcher.dispatch(Const.Events.TASK_UPDATE_QUADRANT, {taskID: taskID, quadrant: quadrant});
	}
};
exports.Actions = Actions;
})(window);