import React from 'react';
import { UserContext } from './DataTables';
/**ShowEntries change the number of row displayed in the table
 */

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function ShowEntries() {
  const value = React.useContext(UserContext); //change the state, and go back to page 1. Avoid bugs if we are in page 2 and there are only 1 page after the setState

  function handleChange(event) {
    value.setShowEntries(event.target.value);
    value.setIndexPages(1);
  }

  return /*#__PURE__*/_jsxs("label", {
    children: ["Show", /*#__PURE__*/_jsxs("select", {
      className: "datatable-select",
      name: "employee-table_length",
      onChange: event => handleChange(event),
      value: value.showEntries,
      children: [/*#__PURE__*/_jsx("option", {
        value: "10",
        children: "10"
      }), /*#__PURE__*/_jsx("option", {
        value: "25",
        children: "25"
      }), /*#__PURE__*/_jsx("option", {
        value: "50",
        children: "50"
      }), /*#__PURE__*/_jsx("option", {
        value: "100",
        children: "100"
      })]
    }), "  entries"]
  });
}

export default ShowEntries;