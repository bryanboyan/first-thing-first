(function(exports) {
'use strict';

exports.TaskReact = React.createClass({
	render: function() {
		return (
			<button draggable="true">
				{this.props.task.title}
			</button>
		);
	}
});

})(this);