# Aprils

Aprils is tiny library for building recursive descent parsers. It's only 260 bytes!


## What's a parser?

In Aprils, a "parser" is just a function that takes an input string and returns a new string along with an [AST node](https://en.wikipedia.org/wiki/Abstract_syntax_tree). The simplest type of parser is one which matches a regular expression. We can use `aprils.need()` for this.

A simple parser for variable names using the regex `/^[a-zA-Z_][\w_]*/`  

```js
const { need } = require('aprils')

function variableName() {
  return need(/^[a-z/)
}
```


