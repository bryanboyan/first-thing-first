describe("Subscriber", function() {
	var aResult = 0, bResult = 0, cResult = 0;
	function AStore() {
		// do nothing
		Subscriber.registerPublisher(this, 'AStore');
	}
	function BStore() {
		// do nothing
		Subscriber.registerPublisher(this, 'BStore');
	}
	var aStore = new AStore();
	var bStore = new BStore();
	var aSubscriber = {
		_onChange: function() {
			aResult = 1;
			cResult = 3;
		}
	};
	var bSubscriber = {
		_onChange: function() {
			bResult = 2;
		}
	};
	Subscriber.setupSubscription(aSubscriber, ['BStore']);
	Subscriber.setupSubscription(bSubscriber, ['AStore', 'BStore']);

	beforeEach(function() {
		aResult = bResult = cResult = 0;
	});
	it('should get publisher registration finished', function() {
		expect('function' === typeof aStore._emitChange).toBe(true);
		expect('function' === typeof bStore._emitChange).toBe(true);
	});
	it('store can affect one subscriber', function() {
		aStore._emitChange();
		expect(bResult).toEqual(2);
	});
	it('store can affect more than one subscribers', function() {
		bStore._emitChange();
		expect(aResult).toEqual(1);
		expect(cResult).toEqual(3);
	});
});