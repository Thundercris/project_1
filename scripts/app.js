function init() {
  const grid = document.querySelector('.grid')
  
  const rowLength = 7
  const columnLength = 6
  const cellCount =  rowLength *  columnLength
  const cells = []
  
  console.log(cellCount)

  const discClass = 'disc'
  const discStartPosition = 0
  let discCurrentPosition = 0

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
  
  function insertDisc() {
    console.log(insertDisc)

  }
  const cellSelect = document.querySelectorAll('.cell')

  class Game {
    constructor (players, totalDiscs) {
      this.players = players
      this.totalDiscs = totalDiscs
    } 
    playerMove(player) {
      if (player.type === 'Human' || player.type === 'Computer' && this.discQuantity >= 21) {
        player.total++
        this.totalDiscs--
      } else 
        alert('TIE!')
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
