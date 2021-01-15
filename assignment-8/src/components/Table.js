import React from 'react'
import TableRow from './TableRow';

function renderRows (numRows, numColumns, newColor) {
    let allRows = []
    for(let i = 0; i < numRows; i++) {
        allRows.push(<TableRow columns={numColumns} color={newColor}/>)
    }
    return allRows;
}
function Table(props) {
    let numRows = props.numRows;
    let numColumns = props.numColumns;
    let newColor = props.color;
    return (
        <table className="table">
            {renderRows(numRows, numColumns, newColor)}
        </table>
    )
}

export default Table;