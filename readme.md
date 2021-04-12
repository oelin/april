# lexi

"lexi" is a minimal lexical analyser that can be used to build larger parsers.


### 3 Simple Functions


```js
const lexi = require('lexi')
```

1. Use `lexi.use` to feed lexi an input string. You might want to read this from a file 

```js
lexi.use('y = (x + 1337) * 42') 
```

