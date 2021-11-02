
import React,{useState} from 'react'
import RowTr from './RowTr';
import ShowEntries from './ShowEntries';
import DataTableFooter from './DataTableFooter';
import DataTableHead from './DataTableHead';
import DataTableSearch from './DataTableSearch';

import './style.css';


function DataTables({label,data}) {

    const [employees,setEmployees]= useState(data)
    const [showEntries,setShowEntries]=useState(10)
    const [indexPages,setIndexPages]=useState(1)
 
    //control the .map() with slice 
    const sliceBegin= indexPages*showEntries-showEntries
    const sliceEnd= indexPages*showEntries

    return(
            <div className="dataTables-wrapper">
                <div className="dataTables-top">
                    <ShowEntries setIndexPages={setIndexPages} showEntries={showEntries} setShowEntries={setShowEntries}/>
                    <DataTableSearch setIndexPages={setIndexPages} employees={employees} setEmployees={setEmployees}/>
                </div>
                    <table className="dataTable-table">
                       <DataTableHead label={label} employees={employees} setEmployees={setEmployees}/>
                        <tbody className="dataTable-body">
                          {employees.slice(sliceBegin,sliceEnd).map((employee,index)=>
                                <RowTr key={index+employee.lastName} data={employee} />
                           )}
                        </tbody>
                    </table>
                    <DataTableFooter sliceBegin={sliceBegin} sliceEnd={sliceEnd} employeesLength={employees.length} showEntries={showEntries} indexPages={indexPages} setIndexPages={setIndexPages} />
            </div>
    )
}

export default DataTables