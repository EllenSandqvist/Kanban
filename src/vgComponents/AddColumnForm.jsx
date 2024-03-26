import React from 'react'

const AddColumnForm = ({onClick, onKeyDown}) => {
  return (
    <div className="div-add-column">
        <button className="button-close" onClick={onClick}>&times;</button> 
        <p>Write a column name and press <strong>Enter</strong> to add the new column.</p>
        <form className="form-add-column">
            <label htmlFor="column-heading">Column name:</label>
            <input id="column-heading" type="text" onKeyDown={onKeyDown}/>
        </form>
    </div>
  )
}

export default AddColumnForm