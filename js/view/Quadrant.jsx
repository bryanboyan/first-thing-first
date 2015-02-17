var View = View || {};

(function() {
'use strict';

View.Quadrant = React.createClass({
	render: function() {
		return (
			<table border="1">
				<tr>
					<td>
						{this.renderQuadrantTasks(Const.QUADRANT.FOUR)}
					</td>
					<td>
						{this.renderQuadrantTasks(Const.QUADRANT.ONE)}
					</td>
				</tr>
				<tr>
					<td>
						{this.renderQuadrantTasks(Const.QUADRANT.TWO)}
					</td>
					<td>
						{this.renderQuadrantTasks(Const.QUADRANT.THREE)}
					</td>
				</tr>
			</table>
		);
	},
	renderQuadrantTasks: function(quadrantID) {
		var tasks = this.getQuadrantTasks(quadrantID);
		var ret = tasks.map(function(t) {
			console.log(t);
			return <View.QuadrantTask task={t} />;
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