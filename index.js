const app = "I don't do much."

var kittens = [
  "Milo",
  "Otis",
  "Garfield"
  ]
  
  function destructivelyAppendKitten(item) {
    kittens.push(item)
    return kittens
  }

  function destructivelyPrependKitten(item) {
    kittens.unshift(item)
    return kittens
  }
  
  function destructivelyRemoveLastKitten() {
    kittens.pop()
    return kittens
  }
  
  function destructivelyRemoveFirstKitten() {
    kittens.shift()
    return kittens
  }
  
  function appendKitten(item) {
    var kitty = [...kittens, item]
    return kitty
  }
  
  function prependKitten(item) {
    var kitty = [item, ...kittens]
    return kitty
  }
  
  function removeLastKitten() {
    var kitty = kittens.slice(0,kittens.lenght)
    return kitty
  }
  
  console.log(kittens.lenght)
  
  