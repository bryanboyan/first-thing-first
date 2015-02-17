var View = View || {};

(function() {
'use strict';

View.QuadrantTask = React.createClass({
	render: function() {
		return (
			<button draggable="true">
				{this.props.task.title}
			</button>
		);
	}
});

})();