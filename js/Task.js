(function(exports) {
'use strict';

/**
 * Definition of Task
 * @param {object}
 * @attribute quadrant
 */
function Task(obj) {
	this._obj = obj;
}
['id','title','quadrant'].forEach(function(key) {
	Task.prototype.__defineGetter__(key, function(){ return this._obj[key]; });
});
Task.prototype.getQuadrant = function() {
	return this._obj.quadrant;
}
Task.prototype.updateTask = function(updateObj) {
	for (var key in updateObj) {
		this._obj[key] = updateObj[key];
	}
}
Task.prototype.updateQuadrant = function(quadrant) {
	this._obj.quadrant = quadrant;
}
Task.prototype.getTitle = function() {
	return this._obj.title;
}

exports.Task = Task;
})(window);