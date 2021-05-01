# Aprils

Aprils is a little framework for building parsers. It's designed to be as simple as possible without limiting what you can do.

Here's really simple parser which matches words.

```js
const { match, peek, feed } = require('aprils')

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

Let's test it out on the string **"Luke, I am your father"**


```js
feed('Luke, I am your father')

word() // returns 'Luke'
word() // returns 'I'
word() // returns 'am'
```

We can also peek ahead to check what the next token is

```js
let minus = () => match(/^-/)

peek(minus) // returns `false` because the next token isn't minus sign
peek(word) // returns `true` because the next token *is* a word
```

##  Skip

Aprils exports a function called skip which can be used to add choices.


```js
const { match, skip, feed } = require('aprils')

function upper() {
  return match(/^[A-Z]/)
}

function lower() {
  return match(/^[a-z]/)
}
```

```js
feed('aAbBcC')

upper() // throws an error because the next token is lowercase

skip(upper) || lower() // returns 'a' (upper didn't match but lower did)
skip(upper) || lower() // returns 'A' (upper matched)
```

We can add any number of choices with JavaScript's `||` operator. The last choice, shouldn't use a skip.

```js
// accept A or B or ... or Y or Z

skip(A) || skip(B) || ... || skip(Y) || Z()  
```


## API

### feed( string )

Sets the input string.

### match( pattern )

Checks if the input string matches a given regular expression. If so, it returns the matched value, otherwise it throws an error. Note that regular expressions should start with `^` so matching starts from the beginning of the input string.

### peek( parser, [args...] )

Executes a parser and returns true if it was successful. This can be used to peek ahead.

### skip( parser, [args...] )

Executes a parser and returns the result if it was successful. This can be used with `||` to add choices.

