import React,{useState} from 'react'
import { UserContext} from './DataTables'


function DataTableSearch(){
    const value = React.useContext(UserContext); 

    //make a copy of the state as a backup,  useful when the search is closed to show all the data
    const [employeesCopy] = useState(value.employees)

  
    //compare the search value with the data.values()
    function handleChange(e){
        if(e.target.value.length>1){
            value.setIndexPages(1)
            var dataToDisplay= employeesCopy.filter((employee)=>{
                 var values=Object.values(employee).map( (val)=>{
                    return val.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
                }).join(' ');
                return values.includes(e.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase());
            })
            value.setEmployees(dataToDisplay)
           
        }else {
            value.setEmployees(employeesCopy)
        }
    }

    return (
        <label>Search: 
            <input type="search" className="datatable-search-input" placeholder="" onChange={handleChange} />
        </label>
    )
}

export  default DataTableSearch