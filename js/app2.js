// const char = document.querySelectorAll("li")
// const vrb = document.querySelector(".vrb")
// const hnt = document.querySelector(".hint")
// const lives = document.querySelector(".lives")
// const category = document.querySelector(".category")
// const clue = document.querySelector(".clue")
// const cluhint = document.querySelector(".cluHint")
// const play = document.querySelector(".play")
// let _verb = []
// // text
// var _verbb = []
// var hint = ''
// var flag = 10
// var flagI = 0
// let ctr = null
// let clu = null

// let tsary = [
//     [{ verb: 'everton', clue: "Based in Mersyside", category: 'Football' }],
//     [{ verb: 'liverpool', clue: "Based in Mersyside", category: 'Football' }],
//     [{ verb: 'swansea', clue: "First Welsh team to reach the Premier Leauge", category: 'Football' }],
//     [{ verb: 'chelsea', clue: "Owned by A russian Billionaire", category: 'Football' }],
//     [{ verb: 'hull', clue: "Once managed by Phil Brown", category: 'Football' }],
//     [{ verb: 'manchester-city', clue: "2013 FA Cup runners up", category: 'Football' }],
//     [{ verb: 'newcastle-united', clue: "Gazza's first club", category: 'Football' }],
//     // ##############################################
//     [{ verb: 'alien', clue: "Science-Fiction horror film", category: 'film' }],
//     [{ verb: 'dirty-harry', clue: "1971 American action film", category: 'film' }],
//     [{ verb: 'gladiator', clue: "Historical drama", category: 'film' }],
//     [{ verb: 'finding-nemo', clue: "Anamated Fish", category: 'film' }],
//     [{ verb: 'jaws', clue: "Giant great white shark", category: 'film' }],
//     // #############################################
//     [{ verb: 'manchester', clue: "Northern city in the UK", category: 'Cities' }],
//     [{ verb: 'milan', clue: "Home of AC and Inter", category: 'Cities' }],
//     [{ verb: 'madrid', clue: "Spanish capital", category: 'Cities' }],
//     [{ verb: 'amsterdam', clue: "Netherlands capital", category: 'Cities' }],
//     [{ verb: 'prague', clue: "Czech Republic capital", category: 'Cities' }],
// ]
// var randNum = parseInt(Math.random() * tsary.length)

// function ran(randNum) {

//     tsary[randNum].forEach((e, i) => {
//         _verbb = []
//         _verb = []

//         for (i = 0; i < e.verb.length; i++) {
//             //  _verbb.push('_ ')
//             _verbb[i] = '_ '

//             // _verb.push(e.verb[i])
//             _verb[i] = e.verb[i]
//         }
//         ctr = e.category
//         clu = `Clue: ${e.clue}`

//     })

// }
// ran(randNum)

// function _category() {
//     if (ctr == 'film') {
//         category.innerHTML = "The Chosen Category Is Films"
//     }
//     else if (ctr == 'Cities') {
//         category.innerHTML = "The Chosen Category Is Cities"
//     }
//     else if (ctr == 'Football') {
//         category.innerHTML = "The Chosen Category Is Premier League Football Teams"

//     } else {
//         console.log("sotonammm");
//     }
//     console.log(ctr);
// }
// _category()



// vrb.innerText = _verbb.join(' ').split(',').toString()
// // hnt.innerHTML = hint
// // lives.innerHTML = "You have ${} lives"
// lives.innerHTML = `You have ${flag} lives`
// // ################################
// char.forEach((index) => {
//     index.addEventListener("mousedown", (s) => {
        

//         // Deactivate Elements
//         s.target.style.pointerEvents = "none"
//         s.target.style.opacity = "0.5"
//         // A to Z
//         const chart = s.target.innerText
//         console.log(_verb);
//         if (flag > 1) {
//             if (_verb.includes(chart)) {
//                 _verb.forEach((e, r) => {

//                     if (e == chart) {
//                         _verbb[r] = e
//                         vrb.innerText = _verbb.join(' ').split(',').toString();
//                         flagI += 1
//                         console.log(flagI);
//                         if (flagI == _verb.length) {
//                             console.log("Yes");
//                             lives.innerHTML = "You Win!"
//                             flag = null
//                         }
//                     }

//                 })
//             }
//             else {
//                 flag -= 1
//                 lives.innerHTML = `You have ${flag} lives`

//             }
//         } else {
//             lives.style.color = 'red'
//             lives.innerHTML = "Game-Over"
//             return
//         }
//     })
// })

// play.addEventListener("click", () => {
//     var randNum = parseInt(Math.random() * tsary.length)
//     ran(randNum)
//     _category()
//     char.forEach((e) => {
//         e.style.pointerEvents = ""
//         e.style.opacity = "1"
//     })
//     flagI = 0
//     flag = 10
//     lives.innerHTML = `You have ${flag} lives`
//     _verbb = _verb.map(() => '_ ')
//     vrb.innerText = _verbb.join(' ').split(',').toString();
//     clue.style.display = 'none'
//     lives.style.color = 'white'


// })
// cluhint.addEventListener("click", () => {
//     clue.style.display = ''
//     clue.innerHTML = clu
// })
