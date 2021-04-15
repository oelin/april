# Aprils

Aprils is tiny library for building recursive descent parsers. It's only 260 bytes!


## What's a parser?

In Aprils, a parser is just a function which takes an input string and returns a new string along with an [AST node](https://en.wikipedia.org/wiki/Abstract_syntax_tree). The simplest type of parser is one which just matches a regular expression.

Here's a parser for variables names, using the regex `/^[a-zA-Z_][\w_]*/`  

```js
const { use, need } = require("aprils")

function variableName() {
  return need(/^[a-zA-Z_][\w_]*/)
}
```

Let's test it out!

```js
// set the input string

let input = "top3_numbers = [0, 42, 1337]"
use(input)

// parse a variable name

variableName() // returns "top3_foods"
```

When using `need`, we usually place `^` at begining of regexes so that it matches from the **start of the input string.**


## Choice

To make 
