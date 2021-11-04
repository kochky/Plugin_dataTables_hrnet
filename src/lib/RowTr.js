import React from 'react';
import TdElement from './TdElement';

function RowTr({data}){

    return(
        <tr className="dataTable-tr" key={Object.values(data)[0] + Object.values(data)[1]}>
            {Object.values(data).map((typeData,index)=> 
             <TdElement  key={typeData+index} id={"DataTable-td-"+index} typeData={typeData} />
                )}
        </tr>
    )
}

export default RowTr