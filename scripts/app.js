function init() {
  const grid = document.querySelector('.grid')

  const rowLength = 7
  const columnLength = 6
  const cellCount =  rowLength *  columnLength
  const cells = []
  const playerChoices = []
  const computerChoices = []
  
  console.log(cellCount)

  const discClass = 'disc'
  const discStartPosition = 0
  let discCurrentPosition = null 

  // MAKE A GRID
  function createGrid(discStartPosition) {
    for (let i = 0; i < cellCount; i++) { 
      const cell = document.createElement('div') 
      cell.id = i
      cell.classList.add('cell')
      cell.innerText = i 
      grid.appendChild(cell) 
      cells.push(cell) 
      // console.log(cell)
    }
  }
  createGrid(discStartPosition)

  //SELECT THE GRID AND CONVERT THE TEXT INTO A NUMBER
  //CHECK IN WHICH POSITION IS THE NUMBER, THEN GIVE ME BACK THE ARRAY THAT CONTAINS THE NUMBER
  //GIVE ME THE BIGGEST (LAST AVAILABLE NUMBER)

  const cellSelect = document.querySelectorAll('.cell') 
  const playerChoice = { currentChoice: null }
  const computerChoice = { currentChoice: null }
  // const choosenElement = []

  let currentPlayer = 'player'

  let choices = [[0,7,14,21,28,35],[1,8,15,22,29,36],[2,9,16,23,30,37],[3,10,17,24,31,38],[4,11,18,25,32,39],[5,12,19,26,33,40],[6,13,20,27,34,41]]

  function returnArray(convertedNumber) {
    for (let i = 0; i < choices.length; i++) {
      if (choices[i].includes(convertedNumber)){
        return choices[i]
      }
    } 
  }
  
  function insertDisc(cell) {
    // convert the div id into a number
    const convertedNumber = parseInt(cell.id) 
    // console.log(cell.id)
    // console.log(convertedNumber)
    // check in which array the "convertedNumber" belongs using the return array function, return the array
    const arrayResult = returnArray(convertedNumber) 
    // console.log(arrayResult)

    const availableSpaces = arrayResult.filter(item => !cells[item].classList.contains('disc'))
    // console.log(availableSpaces)
    cells[Math.max.apply(null, availableSpaces)].classList.add('disc')
    cells[Math.max.apply(null, availableSpaces)].classList.add(currentPlayer)
    // console.log(cells[Math.max.apply(null, availableSpaces)])
    // number selected
    const valueSelected = Math.max.apply(null, availableSpaces)
    selectChoices(currentPlayer, valueSelected)

    swapPlayer()  
  }

  //SWAP PLAYER
  function swapPlayer() {
    if (currentPlayer === 'player') {
      currentPlayer = 'computer'
      computerTurn()
    } else {
      currentPlayer = 'player'
    } 
  }
  //COMPUTER CHOICE
  function computerTurn() {
    const randomNumber = Math.floor(Math.random() * 7)
    insertDisc(cells[randomNumber])
  }
  //STORE SELECTED ELEMENT INTO TWO ARRAYS, PLAYER AND COMPUTER
  function selectChoices(player, valueSelected) {
    if (player === 'player'){
      playerChoices.push(valueSelected)
      console.log(playerChoices)
    } else {
      computerChoices.push(valueSelected)
      console.log(computerChoices)
    }
  }
  

  // console.log(arrayResult)
  //check in the array which is the biggest element and in this way I will choose always the lowest cell in the column
  // const maxValue = Math.max.apply(null, arrayResult)
  // console.log(maxValue)
  //insert disc class
  // cells[maxValue].classList.add('player')
  //this is the position of the maxValue in the array
  // const indexArray  = getTheArrayIndex(maxValue)
  // console.log(indexArray)
  //Position of the arrayResult that contain the maxValue
  // const arrayPosition = choices.indexOf(arrayResult)
  // console.log(arrayPosition)
  //Remove maxValue from choices
  // choices[arrayPosition] = choices[arrayPosition].slice(0, indexArray) //I have the issue of -1 so I might need to put all in a function
  //Push maxValue into choosenElement (only one array for now to test it)
  // choosenElement.push(maxValue)
  // console.log(choices)
  // console.log(choosenElement)

  
  
  // I need to get the position of maxValue once I find it remove it from the array and + into choosenElement
  // function getTheArrayIndex(maxValue) {
  //   for (let i = 0; i < choices.length; i++) {
  //     if (choices[i].indexOf(maxValue) !== -1){
  //       return choices[i].indexOf(maxValue)
  //     }
  //   }
  // } 

  // I need to create the possible choices, the idea is having the arrays of each column, in this way I can also create a rule in order to choose always the n-1. 
  // I need then to define the choice of both, human and computer(random)
  // make the event listener working for all button that I click
  // after the cell is clicked I need to know the position which is done by a number
  // then I need to know that value in which arrays is, once this is known I can call the function and check on this array which is the biggest number (using the funcion I built before)
  // Once I know which is the biggest value I need to know the position of this value
  // after know the position, I need to check the position of the array result
  // Once I know this, I need to find a way to remove the element from the "choices" that I already change to let, in this way I can use this for all future moves.
  // I need to push the element I chose inside the "choosenElement" (I will need this later to check the result - probably is better having two array one for each player?)
  
  //win condition: I need to have 4 discs with the same color in a row column or diagonal. [I also need to check if there is a Tie( using the idea below)]
  //in both cases if is a win or a tie ---> alert message and option of starting a new game (maybe with a button?)
  //vertical option: check each column, organising those in arrays like choices if 4 disc in a row have the same color I win else continue the game (if I still having discs available)
  //orizontal option: same of the above
  //diagonal option: same of the above


  // function playerChoose() {
  //   playerChoice.currentChoice = arrayChoice[3] 
  //   choosenElement.push(playerChoice.currentChoice)
  //   console.log(choosenElement)
  //   playerChoice.currentChoice = arrayChoice[4]  //&& results  !== choosenElement
  //   choosenElement.push(playerChoice.currentChoice)
  //   console.log(choosenElement)
  // }
  // playerChoose()

  // function computerChoose() {
  //computer choose random value from choices, in order to randomize what I can do is to convert choices in one array cointaining all element instead of having them split into arrays.
  //but how can I pass the problem of the biggest value? maybe I can  get the last element (the biggest) of each array and then randomize only one element of each array? X.X
    
  // }

  // class Game {
  //   constructor (players, totalDiscs) {
  //     this.players = players
  //     this.totalDiscs = totalDiscs
  //   } 
  //   playerMove(player) {
  // if (player.type === 'Human' || player.type === 'Computer' && this.discQuantity >= 21) {
  //   player.total++
  //   this.totalDiscs--
  // } else 
  //   alert('TIE!')
  // } 
  // }

  // class Player {
  //   constructor (type, discColor, discQuantity) {
  //     this.type = type
  //     this.discColor = discColor
  //     this.discQuantity = discQuantity
  //     this.total = 0
  //   }
  // }
  // const playerHuman =  new Player('Human', 'red', 21)
  // const playerComputer = new Player('Computer', 'yellow', 21)
  // const connectGame = new Game([playerHuman, playerComputer], 42)
  // console.log(playerHuman)
  // console.log(playerComputer)
  // console.log(connectGame)

  cells.forEach(cell => {
    // cell.addEventListener('click', insertDisc)
    cell.addEventListener('click', function(){
      insertDisc(cell)  
    })
  })
  
}
window.addEventListener('DOMContentLoaded', init)
