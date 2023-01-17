# Aprils

Probably the smallest recursive descent parser in existence.

```js
const { match, peek, feed } = require('april')

function letters() {
  return match(/^\w+/)
}

function separator() {
  return match(/^\W*/) // stuff like spaces and periods
}

function word() {
  sparator()
  return letters()
}
```

Let's test it out!


```js
feed('Luke, I am your father')

word() // returns 'Luke'
word() // returns 'I'"
word() // returns 'am'
```

### Use peek to check the next token

```js
function upper() {
  return match(/^[A-Z]/)
}

function lower() {
  return match(/^[a-z]/)
}

feed("AbCdE")

peek(upper) // returns `true` because the next token is uppercase
peek(lower) // returns `false` because the next token isn't lowercase
```

### Use skip to add choices

```js
const { skip } = require('aprils')

// match lowercase or uppercase

function letter() {
  return skip(lower) || upper()
}

feed('AbC')

letter() // returns 'A'
letter() // returns 'b'
letter() // returns 'C'
```

You can add more choices using JavaScript's `||` operator

```js
// accept A or B or ... or Z

skip(A) || skip(B) || ... || skip(Y) || Z()
```


## API

### feed(string)

Sets the input string.

### match(pattern)

Consumes and returns part of the input string that matches `pattern`. Note that `pattern` should start with `^` to match from the start of the input string.


### peek(parser, [args...])

Executes a parser and returns true if it was successful. The input string isn't consumed.

### skip(parser, [args...])

Executes a parser and returns the result if it was successful. The input string is only consumed on success.

