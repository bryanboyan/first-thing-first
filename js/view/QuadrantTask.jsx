var View = View || {};

(function() {
'use strict';

View.QuadrantTask = React.createClass({
	render: function() {

		return (
			<button draggable="true" 
				onDragStart={this.props.dragStartCB} 
				data-taskid={this.props.task.id}>
				{this.props.task.title}
			</button>
		);
	}
});

})();