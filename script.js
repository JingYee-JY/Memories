const startButton = document.querySelector(".startButton")
const start = document.querySelector(".start")
const selection = document.querySelector(".selection")
const easy = document.querySelector(".easy")
const normal = document.querySelector(".normal")
const hard = document.querySelector(".hard")
const game = document.querySelector(".game")
const board = document.getElementById("board")
const piecesCon = document.getElementById("pieces")
const playAgain = document.querySelector(".againButton")
const home = document.querySelector(".homeButton")
const final = document.querySelector(".final");

let rows;
let columns;
let endpuzzle;

var checkP1
var checkP2
var checkP3


puzzle1Easy = [
    {number: 1, image: "./img/Puzzle 1_E1.png"},
    {number: 2, image: "./img/Puzzle 1_E2.png"},
    {number: 3, image: "./img/Puzzle 1_E3.png"},
    {number: 4, image: "./img/Puzzle 1_E4.png"}
]

puzzle2Easy = [
    {number: 1, image: "./img/Puzzle 2_E1.png"},
    {number: 2, image: "./img/Puzzle 2_E2.png"},
    {number: 3, image: "./img/Puzzle 2_E3.png"},
    {number: 4, image: "./img/Puzzle 2_E4.png"}
]

puzzle3Easy = [
    {number: 1, image: "./img/Puzzle 3_E1.png"},
    {number: 2, image: "./img/Puzzle 3_E2.png"},
    {number: 3, image: "./img/Puzzle 3_E3.png"},
    {number: 4, image: "./img/Puzzle 3_E4.png"}
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
    {number: 1, image: "./img/Puzzle 2_N1.png"},
    {number: 2, image: "./img/Puzzle 2_N2.png"},
    {number: 3, image: "./img/Puzzle 2_N3.png"},
    {number: 4, image: "./img/Puzzle 2_N4.png"},
    {number: 5, image: "./img/Puzzle 2_N5.png"},
    {number: 6, image: "./img/Puzzle 2_N6.png"}
]

puzzle3Normal = [
    {number: 1, image: "./img/Puzzle 3_N1.png"},
    {number: 2, image: "./img/Puzzle 3_N2.png"},
    {number: 3, image: "./img/Puzzle 3_N3.png"},
    {number: 4, image: "./img/Puzzle 3_N4.png"},
    {number: 5, image: "./img/Puzzle 3_N5.png"},
    {number: 6, image: "./img/Puzzle 3_N6.png"}
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
    {number: 1, image: "./img/Puzzle 2_H1.png"},
    {number: 2, image: "./img/Puzzle 2_H2.png"},
    {number: 3, image: "./img/Puzzle 2_H3.png"},
    {number: 4, image: "./img/Puzzle 2_H4.png"},
    {number: 5, image: "./img/Puzzle 2_H5.png"},
    {number: 6, image: "./img/Puzzle 2_H6.png"},
    {number: 7, image: "./img/Puzzle 2_H7.png"},
    {number: 8, image: "./img/Puzzle 2_H8.png"},
    {number: 9, image: "./img/Puzzle 2_H9.png"}
]

puzzle3Hard = [
    {number: 1, image: "./img/Puzzle 3_H1.png"},
    {number: 2, image: "./img/Puzzle 3_H2.png"},
    {number: 3, image: "./img/Puzzle 3_H3.png"},
    {number: 4, image: "./img/Puzzle 3_H4.png"},
    {number: 5, image: "./img/Puzzle 3_H5.png"},
    {number: 6, image: "./img/Puzzle 3_H6.png"},
    {number: 7, image: "./img/Puzzle 3_H7.png"},
    {number: 8, image: "./img/Puzzle 3_H8.png"},
    {number: 9, image: "./img/Puzzle 3_H9.png"}
]

startButton.addEventListener("click", () => {
    start.classList.add("hide")
    selection.classList.remove("hide")
})

easy.addEventListener("click", () => {
    selection.classList.add("hide")
    game.classList.remove("hide")
    rows = 2
    columns =  2
    puzzle = 4
    puzzleSelected = null
    puzzleNumber = null
    Spawn()
})

normal.addEventListener("click", () => {
    selection.classList.add("hide")
    game.classList.remove("hide")
    rows = 2
    columns =  3
    puzzle = 6
    puzzleSelected = null
    puzzleNumber = null
    Spawn()
})

hard.addEventListener("click", () => {
    selection.classList.add("hide")
    game.classList.remove("hide")
    rows = 3
    columns =  3
    puzzle = 9
    puzzleSelected = null
    puzzleNumber = null
    Spawn()
})

playAgain.addEventListener("click", () => {
    final.classList.add("hide")
    game.classList.remove("hide")
    puzzleSelected = null
    puzzleNumber = null
    Spawn()
})

home.addEventListener("click", () => {
    final.classList.add("hide")
    selection.classList.remove("hide")
})

function Spawn(){
    let randomPuzzle = Math.floor(Math.random() * 3);
    let puzzlePieces

    if(puzzle == 4){
        if(randomPuzzle == 0){
            puzzlePieces = puzzle1Easy
        }
        if(randomPuzzle == 1){
            puzzlePieces = puzzle2Easy    
        }
        if(randomPuzzle == 2){
            puzzlePieces = puzzle3Easy
        }
        endpuzzle = 1
        board.classList.add("boardP4")
    }
    if(puzzle == 6){
        if(randomPuzzle == 0){
            puzzlePieces = puzzle1Normal
        }
        if(randomPuzzle == 1){
            puzzlePieces = puzzle2Normal
        }
        if(randomPuzzle == 2){
            puzzlePieces = puzzle3Normal
        }
        endpuzzle = 2
        board.classList.add("boardP6")
    }
    if(puzzle == 9){
        if(randomPuzzle == 0){
            puzzlePieces = puzzle1Hard
        }
        if(randomPuzzle == 1){
            puzzlePieces = puzzle2Hard
            
        }
        if(randomPuzzle == 2){
            puzzlePieces = puzzle3Hard
        }
        endpuzzle = 3
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
            
            let asignButton = document.querySelector(`.${currentClass}`)
            let number = tile.getAttribute("data")
            
            asignButton.addEventListener("click", () => {
                console.log(puzzleNumber)
                console.log(number)
                if(puzzleNumber == null & !asignButton.classList.contains("question")) {return}
                if(puzzleNumber == number & asignButton.classList.contains("question")){
                    puzzleSelected.classList.add("right")
                    asignButton.style.opacity = "1";
                    asignButton.classList.add("done")
                    Check()
                }
                puzzleSelected.style.border = ""
                puzzleSelected = null
                puzzleNumber = null
            })
        }
    }

    //pieces
    let pieces = [];
    for(let i = 1; i <= rows*columns; i++){
        pieces = [...puzzlePieces]
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
                if(puzzleSelected == currentClass){
                    puzzleSelected = null
                    puzzleNumber = null
                    asignButton.style.border = ""
                    return
                }
                else{
                    if(puzzleSelected != null){
                        puzzleSelected.style.border = ""
                    }
                    puzzleSelected = asignButton
                    puzzleNumber = puzzleNo
                    asignButton.style.border = "solid 5px black"
                }
        })
    }

    console.log(checkP1)
    console.log(checkP2)
    console.log(checkP3)

    for(let o = 0; o < endpuzzle; o++){
        let value = (Math.floor(Math.random() * puzzlePieces.length) + 1)
        let puzzleValue = (Math.floor(Math.random() * 3) + 1)

        let questionPuzzle = "guide" + value
        let answerPuzzle = "puzzle" + puzzleValue
        
        let questionButton = document.querySelector(`.${questionPuzzle}`)
        let answerButton = document.querySelector(`.${answerPuzzle}`)
        
        let getQuestionData = questionButton.getAttribute("data")

        if(questionButton.classList.contains("question") || answerButton.classList.contains("change")){
            o--
        }
        if(!questionButton.classList.contains("question")  && !answerButton.classList.contains("change")){
            questionButton.classList.add("question")
            if(checkP1 != getQuestionData && checkP2 != getQuestionData && checkP3 != getQuestionData){
            answerButton.classList.add("change")
            let image = questionButton.src

            answerButton.src = image

            console.log(questionButton.src)
            console.log(answerButton)
            
            answerButton.setAttribute("data", getQuestionData)
           }
        }
    }

}

function Check(){
    let correct = document.querySelectorAll(".done")
        if(correct.length == endpuzzle){
            let delay = setTimeout(() => {
                remove()
                final.classList.remove("hide")
                game.classList.add("hide")
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