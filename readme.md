# Aprils

A tiny library for building recursive descent parsers. It's only 260 bytes!


## Anyone can write a parser

Parsing is often something shrouded in mystery, obscure words and complicated diagrams. While this may be helpful for academics, it's not so helpful for your average Joe trying to parse web pages or learn a thing or two about compilers. Aprils aims to demystify parser construction so you can write one yourself.


## Simple parsers

In Aprils, a parser is just a function which takes an input string and returns a new string along with some data. The simplest type of parser is one which just matches a [regular expression](https://brilliant.org/wiki/regular-expressions/).


Here's a simple parser that matches numbers using `/^\d+/`.

```js
const { use, need, skip } = require("aprils")

function number() {
  return need(/^\d+/)
}
```

Let's test out our parser!

```js
use("42 is the answer to life")

number() // returns "42" and leaves " is the answer to life"
```

Note: we usually place `^` at begining of regular expressions so that we match from the start of the input string.


## Skip

Aprils provides a neat little function called `skip`. Skip does its best to parse something but doesn't throw an error if it fails. Skip can be used to provide multiple choices.

```js
function number() {
  return need(/^\d+/)
}

function word() {
  return need(/^\w+/)
}

// Accept a number *or* a word

function item() {
  return skip(number) || word()
}
```

We can add as many choices as we want using JavaScript's `||` operator; the last one typically doesn't use a skip.

```js
skip(A) || skip(B) || ... || skip(Y) || Z()
```


## API

**need(regex)**
Checks if the input string matches a given regular expression. If so, it returns the matching value, otherwise it throws an error.

**skip(parser, [...args])**
Executes `parser` on the input string and backtracks if `parser` fails.

**peek(parser, [...args])**
Executes `parser` on the input string and *always* backtracks. This can be used to simply check the next token.

**use(string)**
Set the input string.
