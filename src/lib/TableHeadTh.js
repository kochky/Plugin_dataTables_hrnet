import React,{useState,useEffect} from 'react'
import { SortUp } from './images/SortUp'
import { SortDown } from './images/SortDown'

import sortBy from './sortBy'

function TableHeadTh({arrowClicked,setArrowClicked,dataType,thName,employees,setEmployees,id}){

    const [upIsClicked,setUpIsClicked]=useState(false)
    const [downIsClicked,setDownIsClicked]=useState(false)
    const [resetUp,setResetUp]=useState(false)
    const [resetDown,setResetDown]=useState(false)

    //Reset all the arrows when a new one is clicked
    useEffect(() => {
     if(!arrowClicked){
        setUpIsClicked(false)
        setDownIsClicked(false)
     }
    }, [arrowClicked])
     

    //activate an arrow Up after the reset
    useEffect(() => {
        if(resetUp){
           setUpIsClicked(true)
           setArrowClicked(true)
           setResetUp(false)
        }
       },[resetUp,setArrowClicked])

    //activate an arrow Down after the reset
    useEffect(() => {
        if(resetDown){
           setDownIsClicked(true)
           setArrowClicked(true)
           setResetDown(false)
        }
       },[resetDown,setArrowClicked])

    //sort the table and change the arrow style
    function handleClickUp(){
        if(!upIsClicked){
            if(!arrowClicked){
                setUpIsClicked(true)
                setArrowClicked(true)
            }else {
                setArrowClicked(false)
                setResetUp(true)  
            }
            sortBy('up',dataType,employees,setEmployees)
        }
    }

    //sort the table and change the arrow style
    function handleClickDown(){
        if(!downIsClicked){
            if(!arrowClicked){
                setDownIsClicked(true)
                setArrowClicked(true)
            }else {
                setArrowClicked(false)
                setResetDown(true)  
            }
            sortBy('down',dataType,employees,setEmployees)

        }
    }

    return(
        <th id={id} className="dataTable-th">{thName} 
            <div className="sort-icon">
                <SortUp  onClick={handleClickUp} className={upIsClicked ?"dataTable-up clicked":"dataTable-up"} />
               <SortDown onClick={handleClickDown} className={downIsClicked ? "dataTable-down clicked":"dataTable-down"} />
            </div>
        </th> 
    )
}

export default TableHeadTh