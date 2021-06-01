function init() {
  const grid = document.querySelector('.grid')

  const rowLength = 7
  const columnLength = 6
  const cellCount =  rowLength *  columnLength
  const cells = []
  
  console.log(cellCount)

  const discClass = 'disc'
  const discStartPosition = 0
  let discCurrentPosition = null 

  // MAKE A GRID
  function createGrid(discStartPosition) {
    for (let i = 0; i < cellCount; i++) { 
      const cell = document.createElement('div') 
      cell.classList.add('cell')
      cell.innerText = i 
      grid.appendChild(cell) 
      cells.push(cell) 
      console.log(cell)
    }
  }
  createGrid(discStartPosition)

  //SELECT THE GRID
  const cellSelect = document.querySelectorAll('.cell') 

  function insertDisc(cell) {
    console.log(cell)
    const convertedNumber = parseInt(cell.textContent) //COMPARE THE CELL CLICKED CONVERTING THE TEXT INTO NUMBER
    console.log(convertedNumber)

    //check in which array the "convertedNumber" belongs
  }

  // I need to create the possible choices, the idea is having the arrays of each column, in this way I can also create a rule in order to choose always the n-1. 
  // I need then to define the choice of both, human and computer(random)

  // make the event listener working for all button that I click
  // after the cell is clicked I need to know the position which is done by a number
  // then I need to know that value in which arrays is, once this is known I can call the function and check on this array which is the biggest number (using the funcion I built before)
  // Once I know which is the biggest value I need to check that this value wasn't choose already
  // If the value was choosen, check again and give me the other biggest - check if this can be done in a different way
  // check again against the one I already chose
  // if the number is not in the array of the "chosen Element" then add it to the array.

  const playerChoice = { currentChoice: null }
  const computerChoice = { currentChoice: null }
  const choosenElement = []
  const choices = [[0,7,14,21,28,35],[1,8,15,22,29,36],[2,9,16,23,30,37],[3,10,17,24,31,38],[4,11,18,25,32,39],[5,12,19,26,33,40],[6,13,20,27,34,41]]
  
  let results 
  let arrayChoice 
  
  //GET ELEMENT FROM THE CHOICES - IN THIS WAY I MIGHT NOT HAVE THE PROBLEM OF CHECKING IF THE ELEMENT CHOOSE IN IN THE CHOOSENELEMENT ARRAY

  //FIND THE BIGGEST VALUE OF THE ARRAY CHOICES CHECKING INSIDE EACH ELEMENT

  function chooseLowest() { 
    arrayChoice = choices.map(function(subArray) {
      // console.log(arrayChoice)
      results = Math.max.apply(null, subArray)
      console.log(results) 
      return results
    })
  }
  chooseLowest()

  function playerChoose() {
    playerChoice.currentChoice = arrayChoice[3] 
    // console.log(playerChoice.currentChoice)
    choosenElement.push(playerChoice.currentChoice)
    console.log(choosenElement)
    playerChoice.currentChoice = arrayChoice[4]  //&& results  !== choosenElement
    choosenElement.push(playerChoice.currentChoice)
    console.log(choosenElement)
  }
  playerChoose()


  
  function computerChoose() {
    //computer choose random value but I have to check that that value is not in the choosenElement array 
  }

  
  class Game {
    constructor (players, totalDiscs) {
      this.players = players
      this.totalDiscs = totalDiscs
    } 
    playerMove(player) {
      // if (player.type === 'Human' || player.type === 'Computer' && this.discQuantity >= 21) {
      //   player.total++
      //   this.totalDiscs--
      // } else 
      //   alert('TIE!')
    } 
  }

  class Player {
    constructor (type, discColor, discQuantity) {
      this.type = type
      this.discColor = discColor
      this.discQuantity = discQuantity
      this.total = 0
    }
  }
  const playerHuman =  new Player('Human', 'red', 21)
  const playerComputer = new Player('Computer', 'yellow', 21)
  const connectGame = new Game([playerHuman, playerComputer], 42)
  console.log(playerHuman)
  console.log(playerComputer)
  console.log(connectGame)

  cellSelect.forEach(cell => {
    // cell.addEventListener('click', insertDisc)
    cell.addEventListener('click', function(){
      insertDisc(cell)  
    })
  })
  
}
window.addEventListener('DOMContentLoaded', init)
