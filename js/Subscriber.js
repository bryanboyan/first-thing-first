(function(exports) {
	var PUBLISH_FUNC = "_emitChange";
	var SUBSCRIBE_FUNC = "_onChange";	// always call subscriber's _onChange function

	// Subscriber
	var Subscriber = {
		registerPublisher: function(publisher, name) {
			var self = this;
			publisher[PUBLISH_FUNC] = function() {
				self._publish(name);
			};
		},
		setupSubscription: function(subscriber, storeList) {
			var self = this;
			storeList.forEach(function(store) {
				self._registerSubscriber(subscriber, store);
			});
		},

		_subscriberListByPulisher: {},
		_registerSubscriber: function(subscriber, publisherName) {
			if ('function' !== typeof subscriber[SUBSCRIBE_FUNC]) {
				throw 'subscriber should implement '+SUBSCRIBE_FUNC+' function';
			}
			this._subscriberListByPulisher[publisherName] = this._subscriberListByPulisher[publisherName] || [];
			this._subscriberListByPulisher[publisherName].push(subscriber);
		},
		_publish: function(publisherName) {
			if (this._subscriberListByPulisher[publisherName]) {
				this._subscriberListByPulisher[publisherName].forEach(function(subscriber) {
					if ('function' === typeof subscriber[SUBSCRIBE_FUNC]) {
						subscriber[SUBSCRIBE_FUNC]();
					} else {
						console.error('subscriber does not have function: '+SUBSCRIBE_FUNC);
					}
				});
			}
		},
	};
	exports.Subscriber = Subscriber;
})(this);