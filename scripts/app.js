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

  let currentPlayer = 'player'

  let choices = [[0,7,14,21,28,35],[1,8,15,22,29,36],[2,9,16,23,30,37],[3,10,17,24,31,38],[4,11,18,25,32,39],[5,12,19,26,33,40],[6,13,20,27,34,41]]

  let win = false
  const columns = [[35,28,21,14,7,0],[36,29,22,15,8,1],[37,30,23,16,9,2],[38,31,24,17,10,3],[39,32,25,18,11,5],[40,33,26,19,12,5],[41,34,27,20,13,6]]
  const rows = [[35,36,37,38,39,40,41],[28,29,30,31,32,33,34],[21,22,23,24,25,26,27],[14,15,16,17,18,19,20],[7,8,9,10,11,12,13],[0,1,2,3,4,5,6]]
  const diagonal  = [[21,15,9,3],[28,22,16,10,4],[35,29,23,17,11,5],[36,30,24,18,12,6],[37,31,25,19,13],[38,32,26,20],[38,30,22,14],[39,31,23,15,7],[40,32,24,16,8,0],[41,33,25,17,9,1],[34,26,18,10,2],[27,19,11,3]]

  function returnArray(convertedNumber) {
    for (let i = 0; i < choices.length; i++) {
      if (choices[i].includes(convertedNumber)){
        return choices[i]
      }
    } 
  }
  
  function insertDisc(cell) {

    winCondition(columns, 'player')
    winCondition(columns, 'computer')
    winCondition(rows, 'player')
    winCondition(rows, 'computer')
    winCondition(diagonal, 'player')
    winCondition(diagonal, 'computer')

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
    playAudioDisc()

    setTimeout(function () {
      swapPlayer()  
    }, 500)
    
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
    // console.log(randomNumber)
    insertDisc(cells[randomNumber])
  }

  function winCondition(array, player) {
    for (let i = 0; i < array.length; i++){
      let inRow = 0
      
      array[i].forEach(element => {
        if (cells[element].classList.contains(player)){
          inRow++
        } else {
          inRow = 0
        }
        if (inRow > 3){
          win = true
          // playWinnerAudio()
          alert(player + ' won!')
          window.location.reload()
        } 
      })
    }
  } 
  function playAudioDisc() {
    const audio = new Audio('https://actions.google.com/sounds/v1/doors/deadbolt_lock.ogg')
    audio.play()
  }

  cells.forEach(cell => {
    cell.addEventListener('click', function(){
      insertDisc(cell)
    })
  })
  
}
window.addEventListener('DOMContentLoaded', init)



