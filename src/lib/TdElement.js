import React, { useState } from 'react';


/** <td> element in the table row */
function TdElement({id,typeData}){
    
    const [openOverflow,setOpenOverflow]=useState(false)
    const [mouseX,setMouseX]=useState(0)
    const [mouseY,setMouseY]=useState(0)
    const [cursor,setCursor]=useState('auto')

    //if a data is too long to display, onClick a div appears and show the whole data. The div position depends of the element clicked position
    function handleClick(e){
        e.preventDefault()
        e.target.clientWidth < e.target.scrollWidth && setOpenOverflow(true)
        if(window.screen.width-e.clientX <300){
            setMouseX(e.clientX+window.pageXOffset-310)
        }else {
            setMouseX(e.clientX+window.pageXOffset+5 ) 
            }   
        setMouseY(e.clientY+ window.pageYOffset+5)  
    }

    //detects if a data is hidden, and change the cursor if true
    function handleMouseEnter(e){
        e.target.clientWidth < e.target.scrollWidth && setCursor('zoom-in')   
    }

    //close the overflow div when mouse leave the div with the hidden data in
    function handleMouseLeave(e){
       setOpenOverflow(false)
       setCursor('auto')
    }

    return(
        <React.Fragment>
            <td style={{cursor:cursor}} onMouseEnter={(e)=>handleMouseEnter(e)} onMouseLeave={(e)=>handleMouseLeave(e)} onClick={(e)=>handleClick(e)} id={id} className="dataTable-td">{typeData}
            {openOverflow && <span style={{left:mouseX, top:mouseY}} className="div-hover">{typeData}</span>}
            </td>
        </React.Fragment>
    )
}

export default TdElement