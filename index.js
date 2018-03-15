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
  