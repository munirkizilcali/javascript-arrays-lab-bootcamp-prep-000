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
  
  console.log(destructivelyAppendKitten(kittens,'yarrak'))
  
  
  