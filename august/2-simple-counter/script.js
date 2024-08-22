let counter = document.getElementById("counter")
let clicker = document.getElementById("clicker")
let skipper = document.getElementById("skip")
let sprite = document.querySelector("img")

let gen = [
    "red-blue",
    "silver",
    "ruby-sapphire",
    "diamond-pearl",
    "black-white",
    "x-y",
    "lets-go-pikachu-eevee",
    "sword-shield",
    "scarlet-violet"
]

let names = [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise"
]

let linkTemplate = (currentGen, currentName) => `https://img.pokemondb.net/sprites/${currentGen}/normal/${currentName}.png`
let genIndex = 0
let namesIndex = 0
let internalCountNames = 0
let internalCountGen = 0
let count = 0


clicker.onclick = () => {    
    count += 1
    counter.textContent = count
    setSprite(count)
}

skipper.onclick = () => {
    count += 5
    counter.textContent = count
    setSprite(count)
}

const setSprite = (c) => {
    internalCountGen = Math.floor(c/5) % 5
    internalCountNames = Math.floor(c/45) % 45

    genIndex = internalCountGen % gen.length
    namesIndex = internalCountNames % names.length
    sprite.src = linkTemplate(gen[genIndex], names[namesIndex])
}


// internalCountGen = c < 6 ? 0 : c % 5
// internalCountNames = c < 46 ? 0: c % 45
// for every 10 clicks: genIndex = (Math.floor(internalCountGen * 0.1)) % gen.length