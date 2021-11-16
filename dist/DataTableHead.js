import React, { useState } from 'react';
import TableHeadTh from './TableHeadTh';
import { UserContext } from './DataTables';
import { jsx as _jsx } from "react/jsx-runtime";

function DataTableHead() {
  const value = React.useContext(UserContext);
  const [arrowClicked, setArrowClicked] = useState(false);
  return /*#__PURE__*/_jsx("thead", {
    className: "dataTable-thead",
    children: /*#__PURE__*/_jsx("tr", {
      className: "dataTable-head-tr",
      children: Object.entries(value.label[0]).map((name, index) => /*#__PURE__*/_jsx(TableHeadTh, {
        arrowClicked: arrowClicked,
        setArrowClicked: setArrowClicked,
        dataType: name[0],
        id: "DataTable-th-" + index,
        thName: name[1]
      }, name[0]))
    })
  });
}

export default DataTableHead;