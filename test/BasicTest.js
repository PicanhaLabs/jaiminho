var assert		= require('chai').assert,
	Jaiminho	= require('../src/Jaiminho'),
	j			= new Jaiminho();


var module 		= 'Test module',
	ev 			= 'myevent',
	listeners;

function listener1() {}
function listener2() {}
function listener3() {}

describe('Basic functinality', function() {	
	it('Get listeners - no listeners', function(){
		listeners = j.getListeners(module, ev);
		assert.equal(listeners, 0);
	});

	it('Add listener - first listener', function(){
		listeners = j.addListener(module, ev, listener1);
		assert.equal(listeners, 1);
	});

	it('Trigger listener - one listener', function(){
		listeners = j.trigger(module, ev);
		assert.equal(listeners, 1);
	});

	it('Add listener - second listeners', function(){
		listeners = j.addListener(module, ev, listener2);
		assert.equal(listeners, 2);
	});

	it('Trigger listener - two listeners', function(){
		listeners = j.trigger(module, ev);
		assert.equal(listeners, 2);
	});

	it('Remove listener - second listener', function(){
		listeners = j.removeListener(module, ev, listener2);
		assert.equal(listeners, 1);
	});

	it('Add listener - a third listener', function(){
		listeners = j.addListener(module, ev, listener3);
		assert.equal(listeners, 2);
	});

	it('Trigger listener - two listeners', function(){
		listeners = j.trigger(module, ev);
		assert.equal(listeners, 2);
	});

	it('Remove all listeners', function(){
		listeners = j.removeAllListeners(module, ev);
		assert.equal(listeners, 0);
	});
});