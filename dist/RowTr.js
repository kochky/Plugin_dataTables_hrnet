import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";

function RowTr({
  data
}) {
  console.log(Object.values(data));
  return /*#__PURE__*/_jsx("tr", {
    className: "dataTable-tr",
    children: Object.values(data).map((typeData, index) => /*#__PURE__*/_jsx("td", {
      id: "DataTable-td-" + index,
      className: "dataTable-td",
      children: typeData
    }))
  }, Object.values(data)[0] + Object.values(data)[1]);
}

export default RowTr;