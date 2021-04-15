# Aprils

Aprils is tiny library for building recursive descent parsers. It's only 260 bytes!


## What's a parser?

In Aprils, a parser is just a function which takes an input string and returns a new string along with an [AST node](https://en.wikipedia.org/wiki/Abstract_syntax_tree). The simplest type of parser is one which just matches a regular expression.

Here's a parser for variables names, using the regex `/^[a-zA-Z_][\w_]*/`  

```js
const { use, need, skip } = require("aprils")


function variableName() {
  return need(/^[a-zA-Z_][\w_]*/)
}
```

When using `need`, we usually place `^` at begining of regexes so that it matches from the **start of the input string.**


## Skip

Aprils provides a neat little function called `skip`. Skip does its best to parse something but **doesn't throw an error if it fails**. Skip can be used to allow for several possibilities.

Accept a number or a variable name.

```js
function number() {
  return need(/^\d+/)
}


function item() {
  return skip(number) || variableName()
}
```

We can add as many possibilities as we want using JavaScript's `||` operator; the last one typically doesn't use skip.

```js
skip(A) || skip(B) || ... || Z()
```
