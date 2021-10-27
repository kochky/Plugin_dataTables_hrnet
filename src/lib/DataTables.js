
import {useState,useEffect} from 'react'

import RowTr from './RowTr';
import ShowEntries from './ShowEntries';

import './style.css';



function DataTables() {


    function initialState () {

        if (Object.keys(localStorage).length>0 ){
            return JSON.parse(localStorage.getItem("employees"))
        } else {
            return( [
                {
                    "firstName": "",
                    "lastName": "",
                    "dateOfBirth": "",
                    "startDate": "",
                    "department": "Sales",
                    "street": "",
                    "city": "",
                    "state": "AL",
                    "zipCode": ""
                },
                {
                    "firstName": "aa",
                    "lastName": "aa",
                    "dateOfBirth": "10/21/2021",
                    "startDate": "10/08/2021",
                    "department": "Sales",
                    "street": "grg",
                    "city": "zfze",
                    "state": "AL",
                    "zipCode": "151"
                },
                {
                    "firstName": "chris",
                    "lastName": "koch",
                    "dateOfBirth": "11/03/2021",
                    "startDate": "10/05/2021",
                    "department": "Legal",
                    "street": "152 chemin",
                    "city": "marseille",
                    "state": "AL",
                    "zipCode": "13010"
                },
                {
                    "firstName": "test",
                    "lastName": "test",
                    "dateOfBirth": "10/05/2021",
                    "startDate": "10/12/2021",
                    "department": "Sales",
                    "street": "fzef",
                    "city": "zfze",
                    "state": "AL",
                    "zipCode": "51"
                },
                {
                    "firstName": "a",
                    "lastName": "",
                    "dateOfBirth": "",
                    "startDate": "",
                    "department": "Sales",
                    "street": "",
                    "city": "",
                    "state": "AL",
                    "zipCode": ""
                },
                {
                    "firstName": "aaa",
                    "lastName": "aa",
                    "dateOfBirth": "10/21/2021",
                    "startDate": "10/08/2021",
                    "department": "Sales",
                    "street": "grg",
                    "city": "zfze",
                    "state": "AL",
                    "zipCode": "151"
                },
                {
                    "firstName": "chraais",
                    "lastName": "koch",
                    "dateOfBirth": "11/03/2021",
                    "startDate": "10/05/2021",
                    "department": "Legal",
                    "street": "152 chemin",
                    "city": "marseille",
                    "state": "AL",
                    "zipCode": "13010"
                },
                {
                    "firstName": "teaast",
                    "lastName": "test",
                    "dateOfBirth": "10/05/2021",
                    "startDate": "10/12/2021",
                    "department": "Sales",
                    "street": "fzef",
                    "city": "zfze",
                    "state": "AL",
                    "zipCode": "51"
                },
                {
                    "firstName": "aaaaaa",
                    "lastName": "",
                    "dateOfBirth": "",
                    "startDate": "",
                    "department": "Sales",
                    "street": "",
                    "city": "",
                    "state": "AL",
                    "zipCode": ""
                },
                {
                    "firstName": "aaaaaaaaaaaaaaaaaa",
                    "lastName": "aa",
                    "dateOfBirth": "10/21/2021",
                    "startDate": "10/08/2021",
                    "department": "Sales",
                    "street": "grg",
                    "city": "zfze",
                    "state": "AL",
                    "zipCode": "151"
                },
                {
                    "firstName": "chaaaaaaaaaris",
                    "lastName": "koch",
                    "dateOfBirth": "11/03/2021",
                    "startDate": "10/05/2021",
                    "department": "Legal",
                    "street": "152 chemin",
                    "city": "marseille",
                    "state": "AL",
                    "zipCode": "13010"
                },
                {
                    "firstName": "teaaaaaaaaaaaaaast",
                    "lastName": "test",
                    "dateOfBirth": "10/05/2021",
                    "startDate": "10/12/2021",
                    "department": "Sales",
                    "street": "fzef",
                    "city": "zfze",
                    "state": "AL",
                    "zipCode": "51"
                }
            ])
        }
    }

    const [employees, setEmployees]= useState(initialState())
    const [showEntries,setShowEntries]=useState(10)
    const [indexPages,setIndexPages]=useState(1)
    const numberOfPages= Math.ceil(employees.length/showEntries)
    const [pagesArray,setPagesArray]=useState([])

    const employeesRow = pagesArray.map((page)=>{return indexPages===page ? (<span key={page} onClick={()=>setIndexPages(page)} className='page-index active'>{page}</span>):(<span key={page} onClick={()=>setIndexPages(page)} className='page-index'>{page}</span>)})

    //control the .map() with slice 
    const sliceBegin= indexPages*showEntries-showEntries
    const sliceEnd= indexPages*showEntries

    //It will be used to display how many entries there are.
    const numberEntries= ()=>{ 
        if(employees.length < sliceEnd ){
            return employees.length
        }else {
            return sliceEnd
        }
    }

    //create a array, which will be used to render different index of pages to navigate between its
    useEffect(() => {
        var rows = [];
        for (var i = 0; i < numberOfPages; i++) {
            rows.push(i+1);
            setPagesArray(rows)
        }
    }, [employees,showEntries])

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
            <div className="dataTables-wrapper">
                <div className="dataTables-top">
                    
                <ShowEntries setIndexPages={setIndexPages} showEntries={showEntries} setShowEntries={setShowEntries}/>
                    <label>Search:
                        <input type="search" className="" placeholder="" aria-controls="employee-table"/>
                    </label>
                </div>
                    <table className="dataTable-table">
                        <thead className="dataTable-thead">
                            <tr className="dataTable-head-tr">
                                <th className="dataTable-th">First Name</th> 
                                <th className="dataTable-th">Last Name</th> 
                                <th className="dataTable-th">Start Date</th> 
                                <th className="dataTable-th">Department</th> 
                                <th className="dataTable-th">Date of Birth</th> 
                                <th className="dataTable-th">Street</th> 
                                <th className="dataTable-th">City</th> 
                                <th className="dataTable-th">State</th> 
                                <th className="dataTable-th">Zip Code</th> 
                            </tr>
                        </thead> 
                        <tbody className="dataTable-body">
                           {employees.slice(sliceBegin,sliceEnd).map((employee,index)=>
                           <RowTr key={index}data={employee}/>
                           )}
                        </tbody>
                    </table>
                    <div className="dataTable-footer">
                        <div className="dataTables-info">Showing {sliceBegin+1} to {numberEntries()} of {employees.length} entries</div>
                        <div className="dataTable-paginate">
                            
                            {indexPages >1 ?(<span onClick={handleClickPreviousPage}className="page-index"><i class="fas fa-chevron-left dataTable-arrow"></i></span>):(<span onClick={handleClickPreviousPage}className="page-index disable"><i class="fas fa-chevron-left dataTable-arrow"></i></span>)}
                            {employeesRow}

                            { indexPages!==numberOfPages ? (<span onClick={handleClickNextPage}className="page-index"><i class="fas fa-chevron-right dataTable-arrow"></i></span>):(<span onClick={handleClickNextPage}className="page-index disable"><i class="fas fa-chevron-right dataTable-arrow"></i></span>)}
                        
                        </div>
                    </div>
            </div>
    )
}

export default DataTables