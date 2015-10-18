'use strict';

(function(root, jaiminho) {
	/*
	**	UMD BLOCK
	*/	
	if (typeof define === 'function' && define.amd) {
		// AMD
		define([], jaiminho);
	} else if (typeof exports === 'object') {
		// Node, CommonJS-like
		module.exports = jaiminho();
	} else {
		// Browser globals (root is window)
		root.Jaiminho = jaiminho();
	}
}(window, function() {

	var modules		= {}

	function Jaiminho(){}

	Jaiminho.prototype.modules = {};

	Jaiminho.prototype.trigger(moduleName, eventName, params) {
		var listeners	= this.getListeners(moduleName, eventName),
			len			= listeners.length,
			i			= 0;

		for(; i < len; i++)
			listeners[i].call(undefined, params);
	}

	Jaiminho.prototype.addListener (moduleName, eventName, fn) {
		var listeners	= this.getListeners(moduleName, eventName);

		listeners.push(fn);
	}

	Jaiminho.prototype.removeAllListeners (moduleName, eventName) {
		var listeners	= this.getListeners(moduleName, eventName);

		listeners = [];
	}

	Jaiminho.prototype.removeListener (moduleName, eventName, fn) {
		var listeners	= this.getListeners(moduleName, eventName);

		listeners = listeners.filter(function(el) {
			return el.toString() !== fn.toString();
		});
	}

	Jaiminho.prototype.getListeners(moduleName, eventName) {
		var evt = this.getEvent(moduleName, eventName);

		return evt.listeners;
	}

	Jaiminho.prototype.getEvent(moduleName, eventName) {
		this.__ensuresExistence(moduleName, eventName);

		return this.modules[moduleName][eventName];
	}

	Jaiminho.prototype.__ensuresExistence(moduleName, eventName) {
		if (!this.modules.hasOwnProperty(moduleName))
			this.modules[moduleName] = {};

		if (!this.modules[moduleName].hasOwnProperty(eventName)) {
			this.modules[moduleName][eventName] = {
				listeners : []
			};
		}
	}

	return Jaiminho;
}));