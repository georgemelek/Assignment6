let columns =1;

//add row
function addRow() {
    let tbl = document.getElementById("my-table"),
        row = document.createElement("tr");      
    row.classList.add("row");
    tbl.appendChild(row);
    for (let i = 0; i < columns; i++) {
        let cell = document.createElement("td");
        cell.classList.add("cell");
        allowChangeColor(cell);
        row.appendChild(cell);
    }
}
//delete row
function removeRow() {
    let row= document.getElementsByClassName("row");
    let tr=Array.from(row);
    tr[tr.length-1].parentNode.removeChild(tr[tr.length-1]);
}
//add column
function addColumn(){
    columns++;
    let row = document.getElementsByClassName("row");
    let tr=Array.from(row);
    for(let i=0;i<tr.length;i++){
        let cell = document.createElement("td");
        cell.classList.add("cell");
        allowChangeColor(cell);
        tr[i].appendChild(cell);
    }
}

// delete column
function removeColumn() {
    columns--;
    let row=document.getElementsByClassName("row");
    let tr=Array.from(row);
    for(let i=0;i<tr.length;i++){
        tr[i].removeChild(tr[i].lastChild);
    }
}

let chosenColor = "";
let mouseHold = false;
let currentColor = "";

function chooseColor(color){
    chosenColor = color;
}


//Color All Uncolored
function colorAllUncoloredCells(){
    let cells = document.getElementsByTagName("td");
    for(let i=0;i<cells.length;i++){
        if(cells[i].style.backgroundColor == ""){
            cells[i].style.backgroundColor = chosenColor;
        }
    }
}
function allowChangeColor(cell){
    cell.addEventListener("click", setColor);
    cell.addEventListener("mousedown", function() {
        mouseHold = true;
        currentColor = chosenColor;
    })
    cell.addEventListener("mousemove" , function() {
        if (mouseHold == true){
            cell.style.backgroundColor = currentColor;
        }
    })
    cell.addEventListener("mouseup" , function() {
        if (mouseHold == true){
            mouseHold = false;
        }
    })
}

function setColor(){
    this.style.backgroundColor = chosenColor;
}
//Color All to selected Color
function colorAllCells(){
    let cells = document.getElementsByTagName("td");
    for(let i=0;i<cells.length;i++){
        cells[i].style.backgroundColor = chosenColor;
    }
}

//Reset Color
function resetColorOfCells(){
    let cells = document.getElementsByTagName("td");
    for(let i=0;i<cells.length;i++){
        cells[i].style.backgroundColor = "";
    }
}

