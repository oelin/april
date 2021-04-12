# lexi

"lexi" is a minimal lexical analyser that can be used to build larger parsers.


## A simple parser

In this example, we use lexi to create a parser for simple mathematical expressions.

```js
const { use, peek, skip, match } = require('lexi')

// number

function number() {
  return match(/^\d+/)
}

// variable

function variable() {
  return match(/^[a-zA-Z]/)
}

// operation

function operation() {
  return match(/^[\+\-\*\/]/)
}

// literal -> number | variable

function literal() {
  reutrn skip(number) || variable()
}

// unary -> operation expression

function unary() {
  let op = operation()
  let right = expression()
  
  return {
    type: 'unary',
    op,
    right
  }
}

// binary -> '(' expression operation expression ')'

function binary() {
  match(/^(/)
  let left = expression()
  let op = operation()
  let right = expression()
  match(/^)/)
  
  return {
    type: 'binary'
    op,
    left,
    right
  }
}


// expression -> literal | unary | binary

function expression() {
  return literal() || unary() || binary()
}
```
