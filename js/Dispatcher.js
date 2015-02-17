(function(exports) {
	// Dispatcher
	var Dispatcher = {
		_funcsByEvent: {},
		_eventsByID: {},
		_prefix: "HeyID",
		_lastID: 0,
		register: function(event, cb) {
			this._funcsByEvent[event] = this._funcsByEvent[event] || {};
			var id = this._prefix + (++this._lastID);
			this._funcsByEvent[event][id] = cb;
			this._eventsByID[id] = event;
			return id;
		},
		unregister: function(id) {
			var event = this._eventsByID[id];
			if (this._funcsByEvent[event]) {
				delete this._funcsByEvent[event][id];
			}
			delete this._eventsByID[id];
		},
		dispatch: function(event, payload) {
			if (!this._funcsByEvent[event]) return;
			for (var id in this._funcsByEvent[event]) {
				try {
					this._funcsByEvent[event][id](payload);
				} catch(e) {
					console.error('Dispatcher.dispatch event',event,'error:',e);
				}
			}
		}
	}
	exports.Dispatcher = Dispatcher;
})(this);