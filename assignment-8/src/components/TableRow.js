import React from 'react'
import TableCell from './TableCell'

function renderColumns (numColumns, newColor) {
    let allColumns = []
    for(let i=0; i < numColumns; i++) {
        allColumns.push(<TableCell color={newColor}/>)
    }
    return allColumns;
}
function TableRow(props) {
    let newColor = props.color;
    return (
        <tr className="row">
            {renderColumns(props.columns, newColor)}
        </tr>
    ) 
}

export default TableRow;