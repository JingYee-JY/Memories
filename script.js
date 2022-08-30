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
const final = document.querySelector(".final");
const pName = document.querySelector(".name");
const end = document.querySelector(".end");

let rows;
let columns;
let endpuzzle;

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
    Spawn()
})

function Spawn(){
    let randomPuzzle = Math.floor(Math.random() * 3);
    let puzzlePieces

    if(puzzle == 4){
        if(randomPuzzle == 0){
            puzzlePieces = puzzle1Easy
            endpuzzle = {total: 4, name: "Old Clarke Quay", image: "./img/Puzzle 1_ Old Clarke Quay.png" }
        }
        if(randomPuzzle == 1){
            puzzlePieces = puzzle2Easy
            endpuzzle = {total: 4, name: "Gameboy", image: "./img/Puzzle 2_ Gameboy.png" }
        }
        if(randomPuzzle == 2){
            puzzlePieces = puzzle3Easy
            endpuzzle = {total: 4, name: "Haw Flakes", image: "./img/Puzzle 3_ Haw Flakes.png" }
        }
        board.classList.add("boardP4")
        piecesCon.classList.add("boardP4")
    }
    if(puzzle == 6){
        if(randomPuzzle == 0){
            puzzlePieces = puzzle1Normal
            endpuzzle = {total: 6, name: "Old Clarke Quay", image: "./img/Puzzle 1_ Old Clarke Quay.png" }
        }
        if(randomPuzzle == 1){
            puzzlePieces = puzzle2Normal
            endpuzzle = {total: 6, name: "Gameboy", image: "./img/Puzzle 2_ Gameboy.png" }
        }
        if(randomPuzzle == 2){
            puzzlePieces = puzzle3Normal
            endpuzzle = {total: 6, name: "Haw Flakes", image: "./img/Puzzle 3_ Haw Flakes.png" }
        }
        board.classList.add("boardP6")
        piecesCon.classList.add("boardP6")
    }
    if(puzzle == 9){
        if(randomPuzzle == 0){
            puzzlePieces = puzzle1Hard
            endpuzzle = {total: 9, name: "Old Clarke Quay", image: "./img/Puzzle 1_ Old Clarke Quay.png" }
        }
        if(randomPuzzle == 1){
            puzzlePieces = puzzle2Hard
            endpuzzle = {total: 9, name: "Gameboy", image: "./img/Puzzle 2_ Gameboy.png" }
        }
        if(randomPuzzle == 2){
            puzzlePieces = puzzle3Hard
            endpuzzle = {total: 9, name: "Haw Flakes", image: "./img/Puzzle 3_ Haw Flakes.png" }
        }
        board.classList.add("boardP9")
        piecesCon.classList.add("boardP9")
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
                if(puzzleNumber == null) {return}
                if(puzzleNumber == number){
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

    for (let i = 0; i < pieces.length; i ++){
        let currentClass = "puzzle" + (i + 1)

        let tile = document.createElement("img")
        tile.src = pieces[i].image
        tile.classList.add(currentClass)

        piecesCon.append(tile)

        let asignButton = document.querySelector(`.${currentClass}`)
        asignButton.addEventListener("click", () => {
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
                    puzzleNumber = pieces[i].number
                    asignButton.style.border = "solid 5px black"
                }
        })
    }
}

function Check(){
    let correct = document.querySelectorAll(".done")
    console.log(endpuzzle.total)
        if(correct.length == endpuzzle.total){
            let delay = setTimeout(() => {
                startGame = false
                remove()
                final.classList.remove("hide")
                game.classList.add("hide")
                pName.innerHTML = `<u>${endpuzzle.name}</u>`
                end.src = endpuzzle.image
            }, 1000);
            
        }
}

function remove(){
    let right = document.querySelectorAll(".right")
    let done = document.querySelectorAll(".done")

    right.forEach((item) =>{
        item.remove()
    })
    done.forEach((item) =>{
        item.remove()
    })
  }