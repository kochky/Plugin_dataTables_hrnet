import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function ShowEntries({
  setIndexPages,
  showEntries,
  setShowEntries
}) {
  function handleChange(event) {
    setShowEntries(event.target.value);
    setIndexPages(1);
  }

  return /*#__PURE__*/_jsxs("label", {
    children: ["Show", /*#__PURE__*/_jsxs("select", {
      className: "datatable-select",
      name: "employee-table_length",
      onChange: event => handleChange(event),
      value: showEntries,
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