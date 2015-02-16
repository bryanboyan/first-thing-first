describe("Dispatcher", function() {
	var result, handlerID;
	beforeEach(function() {
    result = 0;
    // add a helper function
    if (!Dispatcher.getEventHandlerCallbackNums) {
    	Dispatcher.getEventHandlerCallbackNums = function(event) {
    		if (!this._funcs[event]) return 0;
    		return Object.keys(this._funcs[event]).length;
    	}
    }
  });
	it("can register events", function() {
		handlerID = Dispatcher.register('my_event', function(numA) {
			result = numA;
		});
		expect(Dispatcher.getEventHandlerCallbackNums('my_event')).toEqual(1);
	});
	it('can dispatch events', function() {
		var numA = 10;
		Dispatcher.dispatch('my_event', numA);
		expect(result).toEqual(numA);
	});
	it('can unregister events', function() {
		var res = Dispatcher.unregister('my_event', handlerID);
		expect(res).toBe(true);
		expect(Dispatcher.getEventHandlerCallbackNums('my_event')).toEqual(0);
	});
});