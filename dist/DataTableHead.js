import React, { useState } from 'react';
import TableHeadTh from './TableHeadTh';
import { jsx as _jsx } from "react/jsx-runtime";

function DataTableHead({
  label,
  setEmployees,
  employees
}) {
  const [arrowClicked, setArrowClicked] = useState(false);
  return /*#__PURE__*/_jsx("thead", {
    className: "dataTable-thead",
    children: /*#__PURE__*/_jsx("tr", {
      className: "dataTable-head-tr",
      children: Object.entries(label[0]).map((name, index) => /*#__PURE__*/_jsx(TableHeadTh, {
        arrowClicked: arrowClicked,
        setArrowClicked: setArrowClicked,
        dataType: name[0],
        id: "DataTable-th-" + index,
        thName: name[1],
        setEmployees: setEmployees,
        employees: employees
      }, name[0]))
    })
  });
}

export default DataTableHead;