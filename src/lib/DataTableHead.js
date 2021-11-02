import {useState} from 'react'
import TableHeadTh from './TableHeadTh';

function DataTableHead({label,setEmployees,employees}){
    
   
    const [arrowClicked,setArrowClicked]=useState(false)
    
    return(
        <thead className="dataTable-thead">
            <tr className="dataTable-head-tr">
                {Object.entries(label[0]).map((name)=>
                  <TableHeadTh arrowClicked={arrowClicked} setArrowClicked={setArrowClicked} key={name[0]} dataType={name[0]} thName={name[1]} setEmployees={setEmployees} employees={employees}/>)} 
            </tr>
        </thead> )
}

export default DataTableHead