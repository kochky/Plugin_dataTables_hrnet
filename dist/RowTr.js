import React from 'react';
import TdElement from './TdElement';
import { jsx as _jsx } from "react/jsx-runtime";

function RowTr({
  data
}) {
  return /*#__PURE__*/_jsx("tr", {
    className: "dataTable-tr",
    children: Object.values(data).map((typeData, index) => /*#__PURE__*/_jsx(TdElement, {
      id: "DataTable-td-" + index,
      typeData: typeData
    }, typeData + index))
  }, Object.values(data)[0] + Object.values(data)[1]);
}

export default RowTr;