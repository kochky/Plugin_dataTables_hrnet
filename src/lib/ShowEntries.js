import React from 'react';




function ShowEntries({setIndexPages,showEntries,setShowEntries}){

    function handleChange(event){
        setShowEntries(event.target.value)
        setIndexPages(1)
    }

    return(
        <label>Show 
            <select className="datatable-select" name="employee-table_length" onChange={(event)=>handleChange(event)} value={showEntries}>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>  entries
        </label>
    )
}

export default ShowEntries