# Aprils

Aprils is tiny library for building recursive descent parsers. It's only 260 bytes!


## What's a parser?

In Aprils, a parser is just a function which takes an input string and returns a new string along with an [AST node](https://en.wikipedia.org/wiki/Abstract_syntax_tree). The simplest type of parser is one which just matches a regular expression. We can use `aprils.need()` for this purpose.

Here's a parser for variables names, using the regex  `/^[a-zA-Z_][\w_]*/`  

```js
const { use, need } = require("aprils")

function variableName() {
  return need(/^[a-zA-Z_][\w_]*/)
}
```

Let's test it out!

```js
// set the input string

use('top3_foods = ["pizza", "pizza", "pizza"]')

// parse a variable name

name = variableName()

console.log(name) // "top3_foods"
```


