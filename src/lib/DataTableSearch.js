import {useState} from 'react'


function DataTableSearch({setIndexPages,employees,setEmployees}){
    const [employeesCopy] = useState(employees)

  
    function handleChange(e){
        if(e.target.value.length>1){
            setIndexPages(1)
            var dataToDisplay= employeesCopy.filter((employee)=>{
                 var values=Object.values(employee).map( (val)=>{
                    return val.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
                }).join(' ');
                return values.includes(e.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase());
            })
            setEmployees(dataToDisplay)
           
        }else {
            setEmployees(employeesCopy)
        }
    }

    return (
        <label>Search:
            <input type="search" className="" placeholder="" onChange={handleChange} />
        </label>
    )
}

export  default DataTableSearch