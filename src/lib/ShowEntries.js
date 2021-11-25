import React from 'react';
import { UserContext} from './DataTables'


/**ShowEntries change the number of row displayed in the table
 */
function ShowEntries(){
    const value = React.useContext(UserContext); 
    
    //change the state, and go back to page 1. Avoid bugs if we are in page 2 and there are only 1 page after the setState
    function handleChange(event){
        value.setShowEntries(event.target.value)
        value.setIndexPages(1)
    }

    return(
        <label>Show 
            <select className="datatable-select" name="employee-table_length" onChange={(event)=>handleChange(event)} value={value.showEntries}>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>  entries
        </label>
    )
}

export default ShowEntries