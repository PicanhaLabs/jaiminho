'use strict';

(function(root, jaiminho) {
	/*
	**	UMD BLOCK
	*/	
	if (typeof exports === 'object') {
		// Node, CommonJS-like
		module.exports = jaiminho();
	} else if (typeof define === 'function' && define.amd) {
		// AMD
		var def = define;
		def.call(root, [[], jaiminho()]);
	} else {
		// Browser globals (root is window)
		root.Jaiminho = jaiminho();
	}
}(typeof window !== 'undefined' ? window : {}, function() {

	function Jaiminho() {}

	Jaiminho.prototype.modules = {};

	Jaiminho.prototype.trigger = function(moduleName, eventName, params) {
		var listeners	= this.getListeners(moduleName, eventName),
			len			= listeners.length,
			i			= 0;

		for(; i < len; i++)
			listeners[i].call(undefined, params);

		return listeners.length;
	};

	Jaiminho.prototype.addListener = function (moduleName, eventName, fn) {
		var evt	= this.getEvent(moduleName, eventName);

		evt.listeners.push(fn);

		return evt.listeners.length;
	};

	Jaiminho.prototype.removeAllListeners = function (moduleName, eventName) {
		var evt			= this.getEvent(moduleName, eventName);

		evt.listeners = [];

		return evt.listeners.length;
	};

	Jaiminho.prototype.removeListener = function (moduleName, eventName, fn) {
		var evt			= this.getEvent(moduleName, eventName),
			listeners	= evt.listeners;

		evt.listeners = listeners.filter(function(el) {
			return el.toString() !== fn.toString();
		});

		return evt.listeners.length;
	};

	Jaiminho.prototype.getListeners = function(moduleName, eventName) {
		var evt = this.getEvent(moduleName, eventName);

		return evt.listeners;
	};

	Jaiminho.prototype.getEvent = function(moduleName, eventName) {
		this.__ensuresExistence(moduleName, eventName);

		return this.modules[moduleName][eventName];
	};

	Jaiminho.prototype.__ensuresExistence = function(moduleName, eventName) {
		if (!this.modules.hasOwnProperty(moduleName))
			this.modules[moduleName] = {};

		if (!this.modules[moduleName].hasOwnProperty(eventName)) {
			this.modules[moduleName][eventName] = {
				listeners : []
			};
		}
	};

	return Jaiminho;
}));