import React from 'react';
import TdElement from './TdElement';
/**Row of the table
 * @param {array} data -data to display in the <td>
  */

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
  });
}

export default RowTr;