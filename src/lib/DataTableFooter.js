import {useState,useEffect} from 'react'

function DataTableFooter({sliceBegin,sliceEnd,employeesLength,showEntries, indexPages, setIndexPages}){
    const [pagesArray,setPagesArray]=useState([])

    const numberOfPages= Math.ceil(employeesLength/showEntries)
    const employeesRow = pagesArray.map((page,index)=>{

        if((Math.abs(index+1-indexPages) <= 4 && (indexPages>5&& indexPages<17))||(indexPages<=5 && index<=8)||(indexPages>=17 && index>=11) ||index+1 === numberOfPages){  

            return indexPages===page ? 
                (<div key={page}><span  onClick={()=>setIndexPages(page)} className='page-index active'>{page}</span></div>)
                :(<div key={page} className="page-number-div">{(numberOfPages-indexPages>5 &&index+1===numberOfPages) && (<div className="point-before-number">...</div>)}<span key={page} onClick={()=>setIndexPages(page)} className='page-index'>{page}</span></div>)
        }else return null
    })

    const numberEntries= ()=>{ 
        if(employeesLength < sliceEnd ){
            return employeesLength
        }else {
            return sliceEnd
        }
    }

    useEffect(() => {
        var rows = [];
        for (var i = 0; i < numberOfPages; i++) {
            rows.push(i+1);
            setPagesArray(rows)
        }
    }, [numberOfPages])

    function handleClickPreviousPage(){
        if( indexPages>1){
            setIndexPages(indexPages-1)
        }
    }

    function handleClickNextPage(){
        if(indexPages<numberOfPages){
            setIndexPages(indexPages+1)
        }
    }

    return(
        <div className="dataTable-footer">
                        <div className="dataTables-info">Showing <b>{sliceBegin+1}</b> to <b>{numberEntries()}</b> of <b>{employeesLength}</b> entries</div>
                        <div className="dataTable-paginate">
                            <span className={indexPages!==1?"page-index":"page-index disable"}onClick={()=>setIndexPages(1)}><i className={"fas fa-angle-double-left dataTable-arrow"}></i></span>
                            <span onClick={handleClickPreviousPage}className={indexPages > 1 ? "page-index":"page-index disable"}><i className="fas fa-angle-left dataTable-arrow"></i></span>
                            {employeesRow}
                             {/* {numberOfPages-indexPages>5 && <div>...</div>}  */}
                            <span onClick={handleClickNextPage}className={indexPages!==numberOfPages ?"page-index":"page-index disable"}><i className="fas fa-angle-right dataTable-arrow"></i></span>
                            <span className={indexPages===numberOfPages ?"page-index disable":"page-index"}onClick={()=>setIndexPages(numberOfPages)}><i className={"fas fa-angle-double-right dataTable-arrow"}></i></span>
                        </div>
                    </div>
    )
}


export default DataTableFooter