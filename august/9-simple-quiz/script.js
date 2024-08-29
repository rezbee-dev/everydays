// timer = document.getElementById("timer")
// seconds = 0

// setInterval(() => {
//     timer.innerText = seconds
//     seconds++
//     progress.value = seconds
// }, 1000)

let gen = [
    "red-blue",
    "silver",
    "ruby-sapphire",
    "diamond-pearl",
    "black-white",
    "x-y",
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
    "blastoise",
    "caterpie",
    "metapod",
    "butterfree",
    "weedle",
    "kakuna",
    "beedrill",
    "pidgey",
    "pidgeotto",
    "pidgeot",
    "rattata",
    "raticate",
    "spearow",
    "fearow",
    "ekans",
    "arbok",
    "pikachu",
    "raichu",
    "sandshrew",
    "sandslash",
    // "nidoran-f",
    "nidorina",
    "nidoqueen",
    // "nidoran-m",
    "nidorino",
    "nidoking",
    "clefairy",
    "clefable",
    "vulpix",
    "ninetales",
    "jigglypuff",
    "wigglytuff",
    "zubat",
    "golbat",
    "oddish",
    "gloom",
    "vileplume",
    "paras",
    "parasect",
    "venonat",
    "venomoth",
    "diglett",
    "dugtrio",
    "meowth",
    "persian",
    "psyduck",
    "golduck",
    "mankey",
    "primeape",
    "growlithe",
    "arcanine",
    "poliwag",
    "poliwhirl",
    "poliwrath",
    "abra",
    "kadabra",
    "alakazam",
    "machop",
    "machoke",
    "machamp",
    "bellsprout",
    "weepinbell",
    "victreebel",
    "tentacool",
    "tentacruel",
    "geodude",
    "graveler",
    "golem",
    "ponyta",
    "rapidash",
    "slowpoke",
    "slowbro",
    "magnemite",
    "magneton",
    "farfetchd",
    "doduo",
    "dodrio",
    "seel",
    "dewgong",
    "grimer",
    "muk",
    "shellder",
    "cloyster",
    "gastly",
    "haunter",
    "gengar",
    "onix",
    "drowzee",
    "hypno",
    "krabby",
    "kingler",
    "voltorb",
    "electrode",
    "exeggcute",
    "exeggutor",
    "cubone",
    "marowak",
    "hitmonlee",
    "hitmonchan",
    "lickitung",
    "koffing",
    "weezing",
    "rhyhorn",
    "rhydon",
    "chansey",
    "tangela",
    "kangaskhan",
    "horsea",
    "seadra",
    "goldeen",
    "seaking",
    "staryu",
    "starmie",
    "mr-mime",
    "scyther",
    "jynx",
    "electabuzz",
    "magmar",
    "pinsir",
    "tauros",
    "magikarp",
    "gyarados",
    "lapras",
    "ditto",
    "eevee",
    "vaporeon",
    "jolteon",
    "flareon",
    "porygon",
    "omanyte",
    "omastar",
    "kabuto",
    "kabutops",
    "aerodactyl",
    "snorlax",
    "articuno",
    "zapdos",
    "moltres",
    "dratini",
    "dragonair",
    "dragonite",
    "mewtwo",
    "mew"
]

const progress = document.getElementById("progress")
const startBtn = document.getElementById("start")
const answer = document.getElementById("answer")
const answerLabel = document.getElementById("answer-label")
const sprite = document.getElementById("sprite")
const scoreDisplay = document.getElementById("score")
let currentPokemon = names[0]
let score = 0
let questions = 1
let timerID = null
let state = "START"

startBtn.addEventListener("click", () => {

    if(state == "START") {
        reset()
        state = "STOP"
        startBtn.innerText = "Stop"
        answer.disabled = false
        timerID = setInterval(quizTimer,1000)
    } else if (state == "STOP") {
        endQuiz()
    } else {
        state = "START"
        startBtn.innerText = "Start"
        answer.disabled = true
        reset()
    }

})

answer.addEventListener("keydown", (e) => {
    if(e.code === "Enter") {
        processQuestion()
        answer.value = ""
    }
})

function quizTimer() {
    progress.value++
    if (progress.value == progress.max) {
        processQuestion()
    } 
}

function processQuestion(){
    if(answer.value.toLowerCase() == currentPokemon) {
        score++
    } else {
        answerLabel.style.color = "red"
        answerLabel.style.fontWeight = "bold"
        setInterval(() => {
            answerLabel.style.color = "black"
            answerLabel.style.fontWeight = "normal"
        }, 500)
    }
        
    questions++
    console.log(questions)
    answerLabel.innerText = questions
    progress.value = 0

    if(questions > 10) {
        clearInterval(timerID)
        progress.value = 0
        answerLabel.innerText = 10
        endQuiz()
    }

    changeSprite()
}

function changeSprite(){
    let g = gen[getRandomInt(gen.length)]
    let name = names[getRandomInt(names.length)]
    currentPokemon = name
    sprite.src = `https://img.pokemondb.net/sprites/${g}/normal/${name}.png`
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function reset() {
    sprite.style.display = "block"
    scoreDisplay.style.display = "none"
    score = 0
    questions = 1
    answerLabel.innerText = questions
    progress.value = 0
}

function endQuiz() {
    clearInterval(timerID)
    progress.value = 0
    sprite.style.display = "none"
    scoreDisplay.innerText = `${score}/10 correct`
    scoreDisplay.style.display = "block"
    startBtn.innerText = "Restart?"
    state = "RESTART"
    answer.disabled = true
}

// timerId = setInterval(() => {
//     progress.value++
//     console.log(progress.value)
//     if (progress.value === progress.max) {
//         console.log("max reached!")
//         clearInterval(timerId)
//     } 
// }, 1000)


