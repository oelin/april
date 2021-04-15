# Aprils

Aprils is tiny library for building recursive descent parsers. It's only 260 bytes!


## A bit of background on parsing

In Aprils, a "parser" is just a function that takes an input string and returns a new string along with an [AST node](https://en.wikipedia.org/wiki/Abstract_syntax_tree). The simplest type of parser is one which just matches a regular expression. We can use `aprils.need()` for this.


```js
const { need } = require('aprils')

// a simple parser that matches binary numbers

function parseBinary() {
  return need(/^0b[01]+/)
}
```


