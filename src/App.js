import './App.css';

function App() {

  const originalColor = '#EAEAEA'
  const green = '#19d119'
  const yellow = '#FFFF99'

  function createElements() {
    const cells = [];
    let rowNumber = 0;
    for (let i = 0; i < 2500; i++) {
      if (i % 50 === 0) {
        rowNumber += 1; 
      }
      let collumnNumber = (i % 50) + 1
      cells.push(
        <div 
        className='box'
        data-row={rowNumber}
        data-collumn={collumnNumber}
        id={i} 
        key={i} 
        onClick={() => handlerCell(i)}>
          0
        </div>
      )
    }
    return cells;
  }

  
  function handlerCell (id) {
    const myCell = document.getElementById(id)
    myCell.innerHTML = parseInt(myCell.innerHTML) - 1;

    const dataRow = myCell.dataset.row
    const allCellsInRow = document.querySelectorAll(`[data-row="${dataRow}"]`)

    const dataCollumn = myCell.dataset.collumn
    const allCellsInCollumn = document.querySelectorAll(`[data-collumn="${dataCollumn}"]`)

    allCellsInRow.forEach(function(cell){
      cell.innerHTML = parseInt(cell.innerHTML) + 1;
      cell.style.backgroundColor = yellow
      setTimeout(function(){
        cell.style.backgroundColor = originalColor
      }, 800)
    });

    allCellsInCollumn.forEach(function(cell){
      cell.innerHTML = parseInt(cell.innerHTML) + 1;
      cell.style.backgroundColor = yellow
      setTimeout(function(){
        cell.style.backgroundColor = originalColor
      }, 800)
    });

    let dataRowInt = parseInt(dataRow)
    let dataCollumnInt = parseInt(dataCollumn)
    searchThroughCells('row', dataRowInt);
    searchThroughCells('collumn', dataCollumnInt);
  }

  function searchThroughCells(direction, directionInt){
    for (let i = 1; i <= 50; i++){
      let cell1 = 0
      let cell2 = 0
      let cell3 = 0
      let cell4 = 0
      let cell5 = 0
      let cell6 = 0
      let cell7 = 0
      let cell8 = 0
      let cell9 = 0
      if((directionInt - 4) > 0) cell1 = document.querySelector(`[data-row="${direction === 'collumn' ? i : directionInt - 4}"][data-collumn="${direction === 'row' ? i : directionInt - 4}"]`)
      if((directionInt - 3) > 0) cell2 = document.querySelector(`[data-row="${direction === 'collumn' ? i : directionInt - 3}"][data-collumn="${direction === 'row' ? i : directionInt - 3}"]`)
      if((directionInt - 2) > 0) cell3 = document.querySelector(`[data-row="${direction === 'collumn' ? i : directionInt - 2}"][data-collumn="${direction === 'row' ? i : directionInt - 2}"]`)
      if((directionInt - 1) > 0) cell4 = document.querySelector(`[data-row="${direction === 'collumn' ? i : directionInt - 1}"][data-collumn="${direction === 'row' ? i : directionInt - 1}"]`)
      cell5 = document.querySelector(`[data-row="${direction === 'collumn' ? i : directionInt}"][data-collumn="${direction === 'row' ? i : directionInt}"]`)
      if((directionInt + 1) < 51) cell6 = document.querySelector(`[data-row="${direction === 'collumn' ? i : directionInt + 1}"][data-collumn="${direction === 'row' ? i : directionInt + 1}"]`)
      if((directionInt + 2) < 51) cell7 = document.querySelector(`[data-row="${direction === 'collumn' ? i : directionInt + 2}"][data-collumn="${direction === 'row' ? i : directionInt + 2}"]`)
      if((directionInt + 3) < 51) cell8 = document.querySelector(`[data-row="${direction === 'collumn' ? i : directionInt + 3}"][data-collumn="${direction === 'row' ? i : directionInt + 3}"]`)
      if((directionInt + 4) < 51) cell9 = document.querySelector(`[data-row="${direction === 'collumn' ? i : directionInt + 4}"][data-collumn="${direction === 'row' ? i : directionInt + 4}"]`)
      if((directionInt - 4) > 0 ){
        searchFibonacci(cell1, cell2, cell3, cell4, cell5)
        searchFibonacci(cell5, cell4, cell3, cell2, cell1)
      }
      if((directionInt - 3) > 0 && (directionInt + 1) < 51){
        searchFibonacci(cell2, cell3, cell4, cell5, cell6)
        searchFibonacci(cell6, cell5, cell4, cell3, cell2)
      }
      if((directionInt - 2) > 0 && (directionInt + 2) < 51){
        searchFibonacci(cell3, cell4, cell5, cell6, cell7)
        searchFibonacci(cell7, cell6, cell5, cell4, cell3)
      }
      if((directionInt - 1) > 0 && (directionInt + 3) < 51){
        searchFibonacci(cell4, cell5, cell6, cell7, cell8)
        searchFibonacci(cell8, cell7, cell6, cell5, cell4)
      }
      if((directionInt + 4) < 51){
        searchFibonacci(cell5, cell6, cell7, cell8, cell9)
        searchFibonacci(cell9, cell8, cell7, cell6, cell5)
      }
    }
  }

  function searchFibonacci (el1, el2, el3, el4, el5){
    if (parseInt(el1.innerHTML) + parseInt(el2.innerHTML) === parseInt(el3.innerHTML) && 
    parseInt(el2.innerHTML) + parseInt(el3.innerHTML) === parseInt(el4.innerHTML) && 
    parseInt(el3.innerHTML) + parseInt(el4.innerHTML) === parseInt(el5.innerHTML) &&
    parseInt(el2.innerHTML) !== 0 && parseInt(el3.innerHTML) !== 0 && parseInt(el4.innerHTML) !== 0) {
      el1.style.backgroundColor = green
      el1.innerHTML = "0";
      el2.style.backgroundColor = green
      el2.innerHTML = "0";
      el3.style.backgroundColor = green
      el3.innerHTML = "0";
      el4.style.backgroundColor = green
      el4.innerHTML = "0";
      el5.style.backgroundColor = green
      el5.innerHTML = "0";
      setTimeout(function(){
        el1.style.backgroundColor = originalColor
        el2.style.backgroundColor = originalColor
        el3.style.backgroundColor = originalColor
        el4.style.backgroundColor = originalColor
        el5.style.backgroundColor = originalColor
      }, 800)
    }
  }

  return (
    <div className="App">
      <div className="wrapper">
        {createElements()}
      </div>
    </div>
  );
}

export default App;
