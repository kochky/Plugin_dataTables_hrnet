import React,{useState} from 'react'
import TableHeadTh from './TableHeadTh';
import { UserContext} from './DataTables'

/** Table Head */
function DataTableHead(){
    
  const value = React.useContext(UserContext); 

  //used to avoid that 2 arrows are "clicked" at the same time
  const [arrowClicked,setArrowClicked]=useState(false)
  
  return(
      <thead className="dataTable-thead">
          <tr className="dataTable-head-tr">
              {Object.entries(value.label[0]).map((name,index)=>
                <TableHeadTh 
                  arrowClicked={arrowClicked} 
                  setArrowClicked={setArrowClicked} 
                  key={name[0]} 
                  dataType={name[0]} 
                  id={"DataTable-th-"+index} 
                  thName={name[1]} 
                />)} 
          </tr>
      </thead> )
}

export default DataTableHead