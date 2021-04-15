# Aprils

Aprils is tiny library for building recursive descent parsers. It's only 260 bytes!


## Parsers

In aprils, a "parser" is any function that takes an input string and returns a new string along with an [AST node](https://en.wikipedia.org/wiki/Abstract_syntax_tree). The simplest type of parser is one which just matches a regular expression. For example:

```js
const { need } = require('aprils')

// a simple parser that matches binary numbers

function parseBinary() {
  return need(/^0b[01]+/)
}
```


