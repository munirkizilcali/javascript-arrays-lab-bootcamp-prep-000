const app = "I don't do much."

var kittens = [
  "Milo",
  "Otis",
  "Garfield"
  ]
  
  function destructivelyAppendKitten(kitty, item) {
    kitty.push(item)
    return kitty
  }
  
  console.log(destructivelyAppendKitten(kittens,'yarrak'))
  
  
  