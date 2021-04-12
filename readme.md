# lexi

"lexi" is a minimal lexical analyser that can be used to build larger parsers.


## A simple parser

In this example, we use lexi to create a parser for simple mathematical expressions.

```js
const { use, match, peek, skip } = require('lexi')

use('x + (-y * 10)')

// parser code (see below)...

parseExpression()
```

Result:

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

### Parser code 

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
```

Now lets use our parser


