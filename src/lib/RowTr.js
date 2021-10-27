

function RowTr(props){
    return(
        <tr className="dataTable-tr" key={props.data.firstName + props.data.lastName}>
            <td className="dataTable-td">{props.data.firstName}</td>
            <td className="dataTable-td">{props.data.lastName}</td>
            <td className="dataTable-td">{props.data.startDate}</td>
            <td className="dataTable-td">{props.data.department}</td>
            <td className="dataTable-td">{props.data.dateOfBirth}</td>
            <td className="dataTable-td">{props.data.street}</td>
            <td className="dataTable-td">{props.data.city}</td>
            <td className="dataTable-td">{props.data.state}</td>
            <td className="dataTable-td">{props.data.zipCode}</td>
        </tr>
    )
}

export default RowTr