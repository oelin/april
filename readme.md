# lexi

"lexi" is a minimal lexical analyser that can be used to build larger parsers.


## A simple parser

Lets say we wanted to implement the following parser for simple expressions.

```js
const parse = require('./parse.js')

parse('x + (-y * 10)')
```

Resulting AST:

```js
{
    op: '+',
    left: 'x',
    right: {
        op: '*',
        left: {
            op: '-',
            right: 'y'
        },
        right: '10'
    }
}
```

Here's how we would do it with lexi.

```js
const { use, peek, skip, match } = require('lexi')

// numbers

function number() {
  return match(/^\d+/)
}

// variables

function variable() {
  return match(/^[a-zA-Z]/)
}

// operations

function operation() {
  return match(/^[\+\-\*\/]/)
}

// literal -> number | variable

function literal() {
  return skip(number) || variable()
}

// unary -> operation expression

function unary() {
  let op = operation()
  let right = expression()
  
  return {
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
    op
    left,
    right
  }
}

// expression -> literal | unary | binary

function expression() {
  return literal() || unary() || binary()
}

function parse(text) {
  use(text)
  return expression()
}
```
