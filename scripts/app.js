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
      cell.innerText = i 
      grid.appendChild(cell) 
      cells.push(cell) 
      console.log(cell)
    }
    addDisc(discStartPosition)
  }

  // * ADD DISC TO THE GRID
  function addDisc(position) { 
    console.log('POSITION BEING PASSED IN --->', position)
    console.log('CELL WE ARE PICKING USING THE POSITION INDEX BEING PASSED IN --->', cells[position])
  }
  createGrid(discStartPosition)
}
window.addEventListener('DOMContentLoaded', init)
