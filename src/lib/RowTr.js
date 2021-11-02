import React from 'react';

function RowTr({data}){
   console.log(Object.values(data))
    return(
        <tr className="dataTable-tr" key={Object.values(data)[0] + Object.values(data)[1]}>
            {Object.values(data).map((typeData,index)=> 
             <td id={"DataTable-td-"+index} className="dataTable-td">{typeData}</td>
                )}
        </tr>
    )
}

export default RowTr