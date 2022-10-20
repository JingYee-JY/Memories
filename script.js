const startButton = document.querySelector(".startButton")
const start = document.querySelector(".start")
const selection = document.querySelector(".selection")
const easy = document.querySelector(".easy")
const normal = document.querySelector(".normal")
const hard = document.querySelector(".hard")
const game = document.querySelector(".game")
const round = document.querySelector(".round")
const board = document.getElementById("board")
const piecesCon = document.getElementById("pieces")
const playAgain = document.querySelector(".againButton")
const final = document.querySelector(".final");
const pop = document.querySelector(".pop");
const homeButton = document.querySelector(".homeButton")

const clickSound = document.getElementById("click")
const clap = document.getElementById("clap")
const completed = document.getElementById("completed")
const lose = document.getElementById("lose")

let rows;
let columns;
let questionButton;

let chosenAnswer;
let rounds;
let totalRound;

puzzle1Easy = [
    {number: 1, image: "./img/Puzzle 1_E1.png"},
    {number: 2, image: "./img/Puzzle 1_E2.png"},
    {number: 3, image: "./img/Puzzle 1_E3.png"},
    {number: 4, image: "./img/Puzzle 1_E4.png"}
]

puzzle2Easy = [
    {number: 4, image: "./img/Puzzle 2_E1.png"},
    {number: 5, image: "./img/Puzzle 2_E2.png"},
    {number: 6, image: "./img/Puzzle 2_E3.png"},
    {number: 7, image: "./img/Puzzle 2_E4.png"}
]

puzzle3Easy = [
    {number: 8, image: "./img/Puzzle 3_E1.png"},
    {number: 9, image: "./img/Puzzle 3_E2.png"},
    {number: 10, image: "./img/Puzzle 3_E3.png"},
    {number: 11, image: "./img/Puzzle 3_E4.png"}
]

puzzle1Normal = [
    {number: 1, image: "./img/Puzzle 1_N1.png"},
    {number: 2, image: "./img/Puzzle 1_N2.png"},
    {number: 3, image: "./img/Puzzle 1_N3.png"},
    {number: 4, image: "./img/Puzzle 1_N4.png"},
    {number: 5, image: "./img/Puzzle 1_N5.png"},
    {number: 6, image: "./img/Puzzle 1_N6.png"}
]

puzzle2Normal = [
    {number: 7, image: "./img/Puzzle 2_N1.png"},
    {number: 8, image: "./img/Puzzle 2_N2.png"},
    {number: 9, image: "./img/Puzzle 2_N3.png"},
    {number: 10, image: "./img/Puzzle 2_N4.png"},
    {number: 11, image: "./img/Puzzle 2_N5.png"},
    {number: 12, image: "./img/Puzzle 2_N6.png"}
]

puzzle3Normal = [
    {number: 13, image: "./img/Puzzle 3_N1.png"},
    {number: 14, image: "./img/Puzzle 3_N2.png"},
    {number: 15, image: "./img/Puzzle 3_N3.png"},
    {number: 16, image: "./img/Puzzle 3_N4.png"},
    {number: 17, image: "./img/Puzzle 3_N5.png"},
    {number: 18, image: "./img/Puzzle 3_N6.png"}
]

puzzle1Hard = [
    {number: 1, image: "./img/Puzzle 1_H1.png"},
    {number: 2, image: "./img/Puzzle 1_H2.png"},
    {number: 3, image: "./img/Puzzle 1_H3.png"},
    {number: 4, image: "./img/Puzzle 1_H4.png"},
    {number: 5, image: "./img/Puzzle 1_H5.png"},
    {number: 6, image: "./img/Puzzle 1_H6.png"},
    {number: 7, image: "./img/Puzzle 1_H7.png"},
    {number: 8, image: "./img/Puzzle 1_H8.png"},
    {number: 9, image: "./img/Puzzle 1_H9.png"}
]

puzzle2Hard = [
    {number: 10, image: "./img/Puzzle 2_H1.png"},
    {number: 11, image: "./img/Puzzle 2_H2.png"},
    {number: 12, image: "./img/Puzzle 2_H3.png"},
    {number: 13, image: "./img/Puzzle 2_H4.png"},
    {number: 14, image: "./img/Puzzle 2_H5.png"},
    {number: 15, image: "./img/Puzzle 2_H6.png"},
    {number: 16, image: "./img/Puzzle 2_H7.png"},
    {number: 17, image: "./img/Puzzle 2_H8.png"},
    {number: 18, image: "./img/Puzzle 2_H9.png"}
]

puzzle3Hard = [
    {number: 19, image: "./img/Puzzle 3_H1.png"},
    {number: 20, image: "./img/Puzzle 3_H2.png"},
    {number: 21, image: "./img/Puzzle 3_H3.png"},
    {number: 22, image: "./img/Puzzle 3_H4.png"},
    {number: 23, image: "./img/Puzzle 3_H5.png"},
    {number: 24, image: "./img/Puzzle 3_H6.png"},
    {number: 25, image: "./img/Puzzle 3_H7.png"},
    {number: 26, image: "./img/Puzzle 3_H8.png"},
    {number: 27, image: "./img/Puzzle 3_H9.png"}
]

startButton.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        start.classList.add("hide")
        selection.classList.remove("hide")
        totalRound = 3
        rounds = 0
    }, 200);
})

easy.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        selection.classList.add("hide")
        game.classList.remove("hide")
        rows = 2
        columns =  2
        puzzle = 4
        puzzleSelected = null
        puzzleNumber = null
        Spawn()
    }, 200);
})

normal.addEventListener("click", () => {
    let delay = setTimeout(() => {
        selection.classList.add("hide")
        game.classList.remove("hide")
        rows = 2
        columns =  3
        puzzle = 6
        puzzleSelected = null
        puzzleNumber = null
        Spawn()
    }, 200);
})

hard.addEventListener("click", () => {
    let delay = setTimeout(() => {
        selection.classList.add("hide")
        game.classList.remove("hide")
        rows = 3
        columns =  3
        puzzle = 9
        puzzleSelected = null
        puzzleNumber = null
        Spawn()
    }, 200);
})

playAgain.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        final.classList.add("hide")
        start.classList.remove("hide")
    }, 200);
})

homeButton.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
      location.assign('https://gimme.sg/activations/dementia/');
    }, 200);
})

function Spawn(){

    rounds += 1;
    chosenAnswer = false

    round.innerHTML = `<p>${rounds}/${totalRound}</p>`
    let randomPuzzle = Math.floor(Math.random() * 3);
    let puzzlePieces
    let other

    if(puzzle == 4){
        if(randomPuzzle == 0){
            puzzlePieces = puzzle1Easy
            other = puzzle2Easy
        }
        if(randomPuzzle == 1){
            puzzlePieces = puzzle2Easy   
            other = puzzle3Easy 
        }
        if(randomPuzzle == 2){
            puzzlePieces = puzzle3Easy
            other = puzzle1Easy
        }
        board.classList.add("boardP4")
    }
    if(puzzle == 6){
        if(randomPuzzle == 0){
            puzzlePieces = puzzle1Normal
            other = puzzle2Normal
        }
        if(randomPuzzle == 1){
            puzzlePieces = puzzle2Normal
            other = puzzle3Normal
        }
        if(randomPuzzle == 2){
            puzzlePieces = puzzle3Normal
            other = puzzle1Normal
        }
        board.classList.add("boardP6")
    }
    if(puzzle == 9){
        if(randomPuzzle == 0){
            puzzlePieces = puzzle1Hard
            other = puzzle2Hard
        }
        if(randomPuzzle == 1){
            puzzlePieces = puzzle2Hard
            other = puzzle3Hard
        }
        if(randomPuzzle == 2){
            puzzlePieces = puzzle3Hard
            other = puzzle1Hard
        }
        board.classList.add("boardP9")
    }


    let i = -1
    //initialize the board
    for(let r = 1; r < (rows + 1); r ++){
        for(let c = 1; c < (columns + 1); c++){
            i = i + 1

            let currentClass = "guide" + (i + 1)
            
            let tile = document.createElement("img")
            tile.src = puzzlePieces[i].image
            tile.classList.add(currentClass)
            tile.setAttribute("data", puzzlePieces[i].number)

            board.append(tile)
        }
    }

    //pieces
    let pieces = [];
    for(let i = 1; i <= rows*columns; i++){
        pieces = [...other]
    }

    pieces.reverse();
    for (let i=0; i < pieces.length; i++){
        let j = Math.floor(Math.random() * pieces.length)

        //swap
        let tmp = pieces[i]
        pieces[i] = pieces[j]
        pieces[j] = tmp
    }

    for (let i = 0; i < 3; i ++){
        let currentClass = "puzzle" + (i + 1)

        let tile = document.createElement("img")
        tile.src = pieces[i].image
        tile.classList.add(currentClass)
        tile.setAttribute("data", pieces[i].number)


        let currentCheck = "checkP" + (i + 1)

        window[currentCheck] = pieces[i].number

        piecesCon.append(tile)

        let asignButton = document.querySelector(`.${currentClass}`)

        asignButton.addEventListener("click", () => {
            let puzzleNo = tile.getAttribute("data")
            let answer = questionButton.getAttribute("data")
            console.log(puzzleNo, answer,questionButton)
                if(puzzleNo == answer && chosenAnswer == false){
                    playClickSound()
                    chosenAnswer = true
                    completed.currentTime = 0
                    completed.play()
                    console.log("S")
                    questionButton.src = asignButton.src
                    asignButton.style.opacity = "0"
                    let delay = setTimeout(() => {
                        Check()
                    }, 500);
                    return
                }
                if(chosenAnswer == false && puzzleNo !=answer){
                    playClickSound()
                    lose.currentTime = 0
                    lose.play()
                    pop.classList.remove("hide")
                    chosenAnswer = true
                    let delay = setTimeout(() => {
                        pop.classList.add("hide")
                        chosenAnswer = false
                    },1000)
                }
        })
    }
    
        let value = (Math.floor(Math.random() * puzzlePieces.length) + 1)
        let puzzleValue = (Math.floor(Math.random() * 3) + 1)

        let questionPuzzle = "guide" + value
        let answerPuzzle = "puzzle" + puzzleValue
        
        let questionButton = document.querySelector(`.${questionPuzzle}`)
        let answerButton = document.querySelector(`.${answerPuzzle}`)
        
        let getQuestionData = questionButton.getAttribute("data")
            
            let image = questionButton.src
            answerButton.src = image
            questionButton.src = "./img/question.png";

            answerButton.setAttribute("data", getQuestionData)

}

function Check(){
    if(rounds == totalRound){
        let delay = setTimeout(() => {
                clap.currentTime = 0
                clap.play()
                remove()
                final.classList.remove("hide")
                game.classList.add("hide")
            }, 500);
            return
        }
    else{
        let delay = setTimeout(() => {
            remove()
            Spawn()
        }, 500);
    }
}

function remove(){
    removeAllChildNodes(board)
    removeAllChildNodes(pieces)
    board.classList.remove("boardP4")
    piecesCon.classList.remove("boardP4")
    board.classList.remove("boardP6")
    piecesCon.classList.remove("boardP6")
    board.classList.remove("boardP9")
    piecesCon.classList.remove("boardP9")
  }

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function playClickSound(){
    console.log(clickSound)
    clickSound.currentTime = 0
    clickSound.play()
}

document.addEventListener('dblclick', function(event) {
event.preventDefault();
}, { passive: false });