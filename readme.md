# Aprils

Aprils is tiny library for building recursive descent parsers. It's only 260 bytes!


## Writing parsers can be fun

Parsing is often something shrouded in mystery, obscure words and complicated diagrams. While this may be helpful for academics, it's not so helpful for your average Joe trying to parse web pages and learn a thing or two about compilers. Aprils aims to demystify parsing so you can write one yourself.


## Simple parsers

In Aprils, a parser is just a function which takes an input string and returns a new string along with some data. The simplest type of parser is one which just matches a [regular expression](https://brilliant.org/wiki/regular-expressions/).


Here's a simple parser that matches numbers using /^\d+/.

```js
const { use, need, skip } = require("aprils")


function number() {
  return need(/^\d+/)
}
```

When using `need`, we usually place `^` at begining so that we match from the **start of the input string.**



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
