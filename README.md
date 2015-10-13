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

### Add Listener

```
function listener(arg) {
	// your implementation
}

Jaiminho.addListener('ModuleName', 'EventName', listener);
```

### Trigger Event
```
Jaiminho.trigger('ModuleName', 'EventName', {
	param1: 'foo',
	param2: 'bar'
});
```


OR


```
Jaiminho.trigger('ModuleName', 'EventName');
```

### Remove Listener

```
function listener(arg) {
	// your implementation
}

Jaiminho.removeListener('ModuleName', 'EventName', listener);
```

### Remove All Listeners

```
Jaiminho.removeAllListeners('ModuleName', 'EventName');
```

### Get Listeners

```
Jaiminho.getListeners('ModuleName', 'EventName');
```

### Get Event

```
Jaiminho.getEvent('ModuleName', 'EventName');
```