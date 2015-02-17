describe("Dispatcher", function() {
	var result, handlerID;
	beforeEach(function() {
    result = 0;
    // add a helper function
    if (!Dispatcher.getEventHandlerCallbackNums) {
    	Dispatcher.getEventHandlerCallbackNums = function(event) {
    		if (!this._funcsByEvent[event]) return 0;
    		return Object.keys(this._funcsByEvent[event]).length;
    	};
    	Dispatcher.isHandlerRegistered = function(id) {
    		return ('string' === typeof this._eventsByID[id]);
    	};
    }
  });
	it("can register events", function() {
		handlerID = Dispatcher.register('my_event', function(numA) {
			result = numA;
		});
		expect(Dispatcher.getEventHandlerCallbackNums('my_event')).toEqual(1);
		expect(Dispatcher.isHandlerRegistered(handlerID)).toBe(true);
	});
	it('can dispatch events', function() {
		var numA = 10;
		Dispatcher.dispatch('my_event', numA);
		expect(result).toEqual(numA);
	});
	it('can unregister events', function() {
		Dispatcher.unregister(handlerID);
		expect(Dispatcher.isHandlerRegistered(handlerID)).toBe(false);
		expect(Dispatcher.getEventHandlerCallbackNums('my_event')).toEqual(0);
	});
});