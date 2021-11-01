import {useState,useEffect} from 'react'

import sortBy from './sortBy'



function TableHeadTh({arrowClicked,setArrowClicked,dataType,thName,employees,setEmployees}){

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

    //activate an arrow Down after the rester
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
            sortBy('up',thName,dataType,employees,setEmployees)
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
            sortBy('down',thName,dataType,employees,setEmployees)

        }
    }

    return(
        <th className="dataTable-th">{thName} 
            <div className="sort-icon">
                <i onClick={handleClickUp}className={upIsClicked ? "fas fa-sort-up dataTable-up clicked":"fas fa-sort-up dataTable-up"}></i> 
               <i onClick={handleClickDown} className={downIsClicked ? "fas fa-sort-down dataTable-down clicked":"fas fa-sort-down dataTable-down"}></i>
            </div>
        </th> 
    )
}

export default TableHeadTh