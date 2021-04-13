let text = ''


function use() {
  text = s
}


function lex(token) {
  if (m = text.match(token)) return cut(m)
  throw ''
}


function peek(...a) {
  let s = text
  let node = skip(...a)
  use(s)

  return node
}


funciton skip(f, ...a) {
  let s = text

  try {
    return f(...a)
  } catch {
    use(s)
  }
}


let cut = m => {
  let value = m.filter(e => e).pop()
  
  text = text.slice(value.length)
  return value
}


module.exports = {
  use,
  peek,
  skip,
  match
}
