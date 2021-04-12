# lexi

"lexi" is a minimal lexical analyser that can be used to build larger parsers.


## 3 Simple Functions


Use `lexi.use` to feed lexi an input string (e.g. the contents of a source code file.)

```js
> let input = 'y = (x + 1337) * 42'

> lexi.use(input) 
```

`lexi.match` parses a single token, given its regex and returns the matched value. Be sure to use `^`
at the start of the regex.

```js
> lexi.match(/^\w/)

'y'
```

