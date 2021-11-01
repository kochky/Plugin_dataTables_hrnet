import {useState} from 'react'
import TableHeadTh from './TableHeadTh';

function DataTableHead({setEmployees,employees}){
    
    const thNames=[{firstName:'First Name',
    lastName:'Last Name',
    startDate:'Start Date',
    department:'Department',
    dateOfBirth:'Date of Birth',
    street:'Street',
    city:'City',
    state:'State',
    zipCode:'Zip Code'}]
   
    const [arrowClicked,setArrowClicked]=useState(false)
    
    return(
        <thead className="dataTable-thead">
            <tr className="dataTable-head-tr">
                {Object.entries(thNames[0]).map((name)=>
                  <TableHeadTh arrowClicked={arrowClicked} setArrowClicked={setArrowClicked} key={name[0]} dataType={name[0]} thName={name[1]} setEmployees={setEmployees} employees={employees}/>)} 
            </tr>
        </thead> )
}

export default DataTableHead