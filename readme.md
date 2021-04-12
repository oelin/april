# lexi

"lexi" is a minimal lexical analyser that can be used to build larger parsers.


## 3 Simple Functions


Use `lexi.use` to feed lexi an input string (e.g. the contents of a source code file.)

```js
let input = 'y = (x + 1337) * 42'

lexi.use(input) 
```

`lexi.match` parses a single token and returns the matched value. Be sure to use `^`
at the start of the regex.

```js
let id = /^[a-zA-Z]+/

lexi.match(id) // returns 'y'
```

`lexi.peek` takes a parser function and parses the next token. However, it doesn't advance the lexer's position.

```js
let parseid = () => lexi.match(id)

lexi.peek(parseid) // returns null since the next token isn't an id

lexi.peek(() => /^\s/) // returns ' ' since the next token is a space
lexi.peek(() => /^\s/) // returns ' ' again, since we're still in the same place
```

`lexi.skip` takes a parser function and parses the next token. It advances the lexer's position if the token matches.

```js
lexi.match(/^\s/) // returns ' '

lexi.skip(() => /^=/) // returns '=' since the next token is an equals sign, and advances
```

