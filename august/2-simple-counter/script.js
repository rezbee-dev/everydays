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
    if(c % 5 == 0){
        internalCountGen += 1
    }

    if(c % 45 == 0){
        internalCountNames += 1
    }

    // for every 10 clicks: genIndex = (Math.floor(internalCountGen * 0.1)) % gen.length
    genIndex = internalCountGen % gen.length
    namesIndex = internalCountNames % names.length
    sprite.src = linkTemplate(gen[genIndex], names[namesIndex])
}