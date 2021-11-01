import {useState,useEffect} from 'react'

function DataTableFooter({sliceBegin,sliceEnd,employeesLength,showEntries, indexPages, setIndexPages}){
    const [pagesArray,setPagesArray]=useState([])

    const numberOfPages= Math.ceil(employeesLength/showEntries)
    const employeesRow = pagesArray.map((page)=>{return indexPages===page ? (<span key={page} onClick={()=>setIndexPages(page)} className='page-index active'>{page}</span>):(<span key={page} onClick={()=>setIndexPages(page)} className='page-index'>{page}</span>)})

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
                            <span onClick={handleClickPreviousPage}className={indexPages >1 ?"page-index":"page-index disable"}><i className="fas fa-chevron-left dataTable-arrow"></i></span>
                            {employeesRow}
                            <span onClick={handleClickNextPage}className={indexPages!==numberOfPages ?"page-index":"page-index disable"}><i className="fas fa-chevron-right dataTable-arrow"></i></span>
                        </div>
                    </div>
    )
}


export default DataTableFooter