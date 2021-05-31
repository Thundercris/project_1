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
  
  const playerChoice = {currentChoice: null }
  const computerChoice = {currentChoice: null }
  const choosenElement = []
  const choices = [[0,7,14,21,28,35],[1,8,15,22,29,36],[2,9,16,23,30,37],[3,10,17,24,31,38],[4,11,18,25,32,39],[5,12,19,26,33,40],[6,13,20,27,34,41]]

  // playerChoice.currentChoice = choices[0][2] //testing - selecting element from the array 
  // choosenElement.push(playerChoice.currentChoice) //testing - add what the player choose to the empty array created to store the element choosen
  // console.log(choosenElement)
  // playerChoice.currentChoice = choices[2][1] //testing - array is now populated with both choosen element
  // choosenElement.push(playerChoice.currentChoice)
  // console.log(choosenElement)


  let results 
  function insertDisc() {
    // console.log(insertDisc)
    return choices.map(function(subArray) {
      console.log(subArray)
      results = Math.max.apply(null, subArray)
      console.log(results) 
      return results
    })
  }
  insertDisc()

  playerChoice.currentChoice = choices

  // I need to create the possible choices, the idea is having the arrays of each column, in this way I can also create a rule in order to choose always the n-1.
  // I need then to define the choice of both, human and computer(random)

  const cellSelect = document.querySelectorAll('.cell')

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
    cell.addEventListener('click', insertDisc)
  })
  
}
window.addEventListener('DOMContentLoaded', init)
