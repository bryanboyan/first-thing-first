var View = View || {};

(function() {
'use strict';

View.QuadrantTask = React.createClass({
	render: function() {
		return (
			<button draggable="true" onDragStart={this.props.dragStartCB}>
				{this.props.task.title}
			</button>
		);
	}
});

})();