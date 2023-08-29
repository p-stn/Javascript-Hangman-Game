import {tsary} from './world.js'

const char = document.querySelectorAll("li")
const vrb = document.querySelector(".vrb")
const hnt = document.querySelector(".hint")
const lives = document.querySelector(".lives")
const category = document.querySelector(".category")
const clue = document.querySelector(".clue")
const cluhint = document.querySelector(".cluHint")
const restplay = document.querySelector(".play")
let _verb = []
var _verbb = []
var flag = 10
var flagI = 0
let ctr = null
let clu = null



// generate number random
var randNum = parseInt(Math.random() * tsary.length)

const ran = (randNum) => {
    tsary[randNum].forEach((e, i) => {
        _verbb = []
        _verb = []

        for (i = 0; i < e.verb.length; i++) {
            _verbb[i] = "_ "
            _verb[i] = e.verb[i]
        }
        ctr = e.category
        clu = `Clue: ${e.clue}`

    })
}
ran(randNum)

const _category = () => {
    if (ctr == "film") {
        category.innerHTML = "The Chosen Category Is Films"
    }
    else if (ctr == "Cities") {
        category.innerHTML = "The Chosen Category Is Cities"
    }
    else if (ctr == "Football") {
        category.innerHTML = "The Chosen Category Is Premier League Football Teams"

    } else {
        console.log("sotonammm");
    }
}
_category()



vrb.innerText = _verbb.join(" ").split(",").toString()
lives.innerHTML = `You have ${flag} lives`
char.forEach((index) => {
    index.addEventListener("mousedown", (s) => {
        // Deactivate Elements
        s.target.style.pointerEvents = "none"
        s.target.style.opacity = "0.5"
        // A to Z
        const chart = s.target.innerText
        // The number of attempts will decrease by one if the answer is wrong
        if (flag == 1) {
            lives.style.color = "red"
            lives.innerHTML = "Game-Over"
            return
        }
        if (_verb.includes(chart)) {
            _verb.forEach((e, r) => {

                if (e == chart) {
                    _verbb[r] = e
                    vrb.innerText = _verbb.join(" ").split(",").toString();
                    flagI += 1
                }

            })
        }
        else {
            flag -= 1
            lives.innerHTML = `You have ${flag} lives`

        }
        if (flagI == _verb.length) {
            flag = null
            lives.style.color = "green"
            lives.innerHTML = "You Win!"
        }
    })
})

restplay.addEventListener("click", () => {
    var randNum = parseInt(Math.random() * tsary.length)
    ran(randNum)
    _category()
    char.forEach((e) => {
        e.style.pointerEvents = ""
        e.style.opacity = "1"
    })
    flagI = 0
    flag = 10
    lives.innerHTML = `You have ${flag} lives`
    _verbb = _verb.map(() => "_ ")
    vrb.innerText = _verbb.join(" ").split(",").toString();
    clue.style.display = "none"
    lives.style.color = "white"


})
cluhint.addEventListener("click", () => {
    clue.style.display = ""
    clue.innerHTML = clu
})

