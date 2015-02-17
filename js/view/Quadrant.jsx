var View = View || {};

(function() {
'use strict';

// mark the current drag over quadrant, prevent the dragOver logic to be called multiple times.
var currentOverQuadrant = null;

View.Quadrant = React.createClass({
	name: "View.Quadrant",
	className: "View.Quadrant",
	render: function() {
		return (
			<table border="1">
				<tr>
					{this.renderQuadrant(Const.QUADRANT.FOUR)}
					{this.renderQuadrant(Const.QUADRANT.ONE)}
				</tr>
				<tr>
					{this.renderQuadrant(Const.QUADRANT.TWO)}
					{this.renderQuadrant(Const.QUADRANT.THREE)}
				</tr>
			</table>
		);
	},
	handlerDragStart: function(e) {
		// reset dragOver area
		currentOverQuadrant = null;
		e.dataTransfer.effectAllowed = 'move';

    // Firefox requires calling dataTransfer.setData
    // for the drag to properly work
    e.dataTransfer.setData("text/html", e.currentTarget);
	},
	handlerDragOver: function(e) {
		if (e.preventDefault) {
	    e.preventDefault();
	  }
	  var overArea = e.target;
	  if (overArea.className === this.className) {
	  	var overQuadrantID = Number(overArea.getAttribute('data-id'));
	  	if (this.currentOverQuadrant !== overQuadrantID) {
	  		this.currentOverQuadrant = overQuadrantID;
	  		// handle drag over
	  		console.log('handling button draging over id:', overQuadrantID);
	  	}
	  }
	},
	handlerDragEnd: function(e) {
		console.log(e.target);
	},
	renderQuadrant: function(quadrantID) {
		var quadrant =
			<td 
				onDragOver={this.handlerDragOver} 
				onDragEnd={this.handlerDragEnd}
				data-id={quadrantID} 
				className={this.className}>
				{this.renderQuadrantTasks(quadrantID)}
			</td>;
		return quadrant;
	},
	renderQuadrantTasks: function(quadrantID) {
		var tasks = this.getQuadrantTasks(quadrantID);
		var self = this;
		var ret = tasks.map(function(t) {
			return <View.QuadrantTask 
				task={t}
				dragStartCB={self.handlerDragStart}
			/>;
		});
		return ret;
	},
	getQuadrantTasks: function(quadrantID) {
		return TaskStore.getTasksByQuadrant(quadrantID);
	},
	getQuadrantBackground: function(quadrantID) {
		switch(quadrantID) {
			case Const.QUADRANT.ONE:
				return (
					<textarea>
						Manage
						Crises & Presssing Problems

						Demand + Necessity
						Daily fire-fighting
						Be quick to delegate

						Important and Urgent
					</textarea>
				);
			case Const.QUADRANT.TWO:
				return (
					<textarea>
						FOCUS
						On Strategies & Values

						Opportunity + Planning
						Keep Critical thinking
						Consider the macro

						Important not urgent
					</textarea>
				);
			case Const.QUADRANT.THREE:
				return (
					<textarea>
						Avoid
						Interruptions & Busy work

						Illusion + Deception
						Not Your emergency
						Minimize investment

						Urgent not important
					</textarea>
				);
			case Const.QUADRANT.FOUR:
				return (
					<textarea>
						Limit
						The trivial & wasteful

						Escape + waste
						Entertainment only
						Use to Minimize stress

						Not Important or urgent
					</textarea>
				);
		}
	},
});
})();