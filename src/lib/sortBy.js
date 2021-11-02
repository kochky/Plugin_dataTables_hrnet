
function upComparator(prop) {
    return ((a, b) =>
        a[prop] > b[prop]? 1 :-1)
}
function downComparator(prop) {
    return ((a, b) =>
        a[prop] < b[prop]? 1 :-1)
}

function sortBy(upOrDown,dataType,employees,setEmployees){
    const employeesCopy = [].concat(employees)
    if(upOrDown==='up'){
        setEmployees(employeesCopy.sort(upComparator(dataType)))
    } else {
        setEmployees(employeesCopy.sort(downComparator(dataType)))
    }
}

export default sortBy