[![Build Status](https://travis-ci.org/PicanhaLabs/jaiminho.svg?branch=master)](https://travis-ci.org/PicanhaLabs/jaiminho) [![Code Climate](https://codeclimate.com/github/PicanhaLabs/jaiminho/badges/gpa.svg)](https://codeclimate.com/github/PicanhaLabs/jaiminho)

# Jaiminho

Event manager available for node and browser applications.

## Install

```
npm install jaiminho
```

OR

```
bower install jaiminho
```

## Use

Just import **dist/jaiminho.min.js** in your html.

You can also import via AMD or CommonJS.

Create a Jaiminho instance:

```
var J = new Jaiminho();
```

### Add Listener

```
function listener(arg) {
	// your implementation
}

J.addListener('ModuleName', 'EventName', listener);
```

### Trigger Event
```
J.trigger('ModuleName', 'EventName', {
	param1: 'foo',
	param2: 'bar'
});
```


OR


```
J.trigger('ModuleName', 'EventName');
```

### Remove Listener

```
function listener(arg) {
	// your implementation
}

J.removeListener('ModuleName', 'EventName', listener);
```

### Remove All Listeners

```
J.removeAllListeners('ModuleName', 'EventName');
```

### Get Listeners

```
J.getListeners('ModuleName', 'EventName');
```

### Get Event

```
J.getEvent('ModuleName', 'EventName');
```
