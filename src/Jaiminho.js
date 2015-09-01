(function() {
	var isCommonJS	= typeof module !== 'undefined' && module.exports,
		modules		= {},
		instance;

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

	instance = {
		trigger				: trigger;
		addListener			: addListener;
		removeListener		: removeListener;
		removeAllListeners	: removeAllListeners;
		getEvent			: getEvent;
		getListeners		: getListeners;
	};

	if (isCommonJS)
		module.exports	= instance;
	else
		self.Jaiminho	= instance;
})();