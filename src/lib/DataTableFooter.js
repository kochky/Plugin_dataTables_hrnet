import React,{useState,useEffect} from 'react'
import { DoubleArrowLeft } from './images/DoubleArrowLeft'
import { DoubleArrowRight } from './images/DoubleArrowRight'
import { ArrowRight } from './images/ArrowRight'
import { ArrowLeft } from './images/ArrowLeft'
import { UserContext} from './DataTables'

/** Table Footer */
function DataTableFooter(){
    const [pagesArray,setPagesArray]=useState([])
    const [numberOfPages,setNumberOfPage]=useState(1)

    const value = React.useContext(UserContext); 

    //display the number of pages in the footer
    const employeesRow = pagesArray.map((page,index)=>{
        if((Math.abs(index+1-value.indexPages) <= 4 )||(value.indexPages<=5 && index<=8)||index+1 === numberOfPages || (numberOfPages-value.indexPages <=4 && numberOfPages-index <=9)){
      
            return value.indexPages===page ?
                (<div key={page}><span  onClick={()=>value.setIndexPages(page)} className='page-index active'>{page}</span></div>)
                :(<div key={page} className="page-number-div">{(numberOfPages-value.indexPages>5 &&index+1===numberOfPages) && (<div className="point-before-number">...</div>)}<span key={page} onClick={()=>value.setIndexPages(page)} className='page-index'>{page}</span></div>)
        }else return null
    })

    //return the number of employees
    const numberEntries= ()=>{
        if(value.employees.length < value.sliceEnd ){
            return value.employees.length 
        }else {
            return value.sliceEnd
        }
    }
    
    //calculate the number of pages, it changes according to the number of employees
    useEffect(() => {
        if(value.employees.length ===0){
           setNumberOfPage(1)
        }else  {
            setNumberOfPage(Math.ceil(value.employees.length /value.showEntries))
        }
        var rows = [];
        for (var i = 0; i < numberOfPages; i++) {
            rows.push(i+1);
            setPagesArray(rows)
        }
    }, [numberOfPages,value.employees.length ,value.showEntries])

    //go to previous page of the table
    function handleClickPreviousPage(){
        if( value.indexPages>1){
            value.setIndexPages(value.indexPages-1)
        }
    }

    //go to he next page of the table
    function handleClickNextPage(){
        if(value.indexPages<numberOfPages){
            value.setIndexPages(value.indexPages+1)
        }
    }

    return(
        <div className="dataTable-footer">
            <div className="dataTables-info">Showing {value.employees.length  ===0?<b>{value.sliceBegin}</b>:<b>{value.sliceBegin+1}</b>} to <b>{numberEntries()}</b> of <b>{value.employees.length }</b> entries</div>
            <div className="dataTable-paginate">
                <span className={value.indexPages!==1?"page-index scale":"page-index disable "}onClick={()=>value.setIndexPages(1)}><DoubleArrowLeft /></span>
                <span onClick={handleClickPreviousPage}className={value.indexPages > 1 ? "page-index":"page-index disable"}><ArrowLeft /></span>
                {employeesRow}
                <span onClick={handleClickNextPage}className={value.indexPages!==numberOfPages ?"page-index":"page-index disable"}><ArrowRight /></span>
                <span className={value.indexPages===numberOfPages ?"page-index disable":"page-index"}onClick={()=>value.setIndexPages(numberOfPages)}><DoubleArrowRight /></span>
            </div>
        </div>
    )
}


export default DataTableFooter