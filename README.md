# is-undo-redo

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Check if a key event is undo or redo. This uses Cmd+Z or Ctrl+Z for undo, and Cmd+Shift+Z or Ctrl+Shift+Z for redo. 

```js
var events = require('dom-events')
var isUndo = require('is-undo-redo').undo
var isRedo = require('is-undo-redo').redo

events.on(element, 'keydown', function(ev) {
	if (isUndo(ev)) {
		//.. handle undo
	} else if (isRedo(ev)) {
		//.. handle redo
	}
})
```

## Usage

[![NPM](https://nodei.co/npm/is-undo-redo.png)](https://nodei.co/npm/is-undo-redo/)


### `isUndoRedo.undo(event[, style])`
### `isUndoRedo.redo(event[, style])`

You can specify a `style` string to explicitly allow one keystroke or the other:

- `"mac"` only allows Cmd+Z and Cmd+Shift+Z
- `"windows"` only allows Ctrl+Z and Ctrl+Shift+Z

If no style is specified, both will be accepted. 

### `isUndoRedo(event[, style])`

Returns true if the key event was either undo or redo. 

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/is-undo-redo/blob/master/LICENSE.md) for details.
