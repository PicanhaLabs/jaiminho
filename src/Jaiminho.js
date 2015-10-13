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
	var modules		= {},
		Jaiminho;

	function trigger(moduleName, eventName, params) {
		var listeners	= getListeners(moduleName, eventName),
			len			= listeners.length,
			i			= 0;

		for(; i < len; i++)
			listeners[i].call(undefined, params);
	}

	function addListener (moduleName, eventName, fn) {
		var listeners	= getListeners(moduleName, eventName);

		listeners.push(fn);
	}

	function removeAllListeners (moduleName, eventName) {
		var listeners	= getListeners(moduleName, eventName);

		listeners = [];
	}

	function removeListener (moduleName, eventName, fn) {
		var listeners	= getListeners(moduleName, eventName);

		listeners = listeners.filter(function(el) {
			return el.toString() !== fn.toString();
		});
	}

	function getListeners(moduleName, eventName) {
		var evt = getEvent(moduleName, eventName);

		return evt.listeners;
	}

	function getEvent(moduleName, eventName) {
		__ensuresExistence(moduleName, eventName);

		return modules[moduleName][eventName];
	}

	function __ensuresExistence(moduleName, eventName) {
		if (!modules.hasOwnProperty(moduleName))
			modules[moduleName] = {};

		if (!modules[moduleName].hasOwnProperty(eventName)) {
			modules[moduleName][eventName] = {
				listeners : []
			};
		}
	}

	Jaiminho = {
		trigger				: trigger,
		addListener			: addListener,
		removeListener		: removeListener,
		removeAllListeners	: removeAllListeners,
		getEvent			: getEvent,
		getListeners		: getListeners
	};

	return Jaiminho;
}));