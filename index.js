let text = ''


function use(s) {
  text = s
}


// parse without advancing the cursor

function peek(...a) {
  let s = text
  let node = skip(...a)
  use(s)

  return node
}


// parse and ignore syntax errors

function skip(f, ...a) {
  let s = text

  try {
    return f(...a)
  } catch {
    use(s)
  }
}


function cut(m) {
  // read the innermost matching group
  
  let value = m.filter(e => e).pop()

  // advance the cursor

  text = text.slice(value.length)
  return value
}


// parse a single token given its regex

function match(token) {

  if (m = text.match(token)) return cut(m)
  throw ''
}


module.exports = {
  use,
  peek,
  skip,
  match
}
