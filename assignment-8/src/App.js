import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      numRows: 2,
      numColumns: 3,
      chosenColor: ''
    }
  }
  //Adding rows
  addRow = () => {
    let existingRows = this.state.numRows;
    this.setState({
      numRows: existingRows + 1
    })
  }
  //adding columns
  addColumn = () => {
    let existingColumns = this.state.numColumns;
    this.setState({
      numColumns: existingColumns + 1
    })
  }
  //deleting rows
  deleteRow=()=>{
    let existingRows=this.state.numRows;
    this.setState({
      numRows:existingRows-1
    })
  }
  //deleting columns
  deleteColumn=()=>{
    let existingColumns=this.state.numColumns;
    this.setState({
      numColumns:existingColumns-1
    })
  }
  //displaying the result
  render() {  
    return (
      <div className="App">
        <h1>Assignment-8</h1>
        <div className="buttons">
          <button id="addRowButton" type="button" onClick={() => this.addRow()}>Add a Row</button>
          <button id="addColumnButton" type="button" onClick={() => this.addColumn()}>Add a Column</button>
          <button id="deleteRowButton" type="button" onClick={()=>this.deleteRow()}>Remove a Row</button>
          <button id="deleteColumnButton" type="button" onClick={()=>this.deleteColumn()}>Remove a Column</button>
        </div>
        <br></br>
        <div id="colorMenu">
          <label>Choose a color:</label>
          <select name="colors" id="colors" onChange={(event) => {
            this.setState({
              color: event.target.value
            })
          }}>
            <option value="chooseColor">--Choose a Color</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
        </div>
        <br></br>
        <Table className="tbl" 
          numColumns = {this.state.numColumns} 
          numRows = {this.state.numRows}
          color = {this.state.color}
        >
        </Table>
      </div>
    );
  }
}

export default App;