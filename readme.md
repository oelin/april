# lexi

"lexi" is a minimal lexical analyser that can be used to build larger parsers.


## 3 Simple Functions


Use `lexi.use` to feed lexi an input string (e.g. the contents of a source code file.)

```js
lexi.use('y = (x + 1337) * 42') 
```

