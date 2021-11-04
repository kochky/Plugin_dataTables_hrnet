import React, { useState } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function DataTableSearch({
  setIndexPages,
  employees,
  setEmployees
}) {
  const [employeesCopy] = useState(employees);

  function handleChange(e) {
    if (e.target.value.length > 1) {
      setIndexPages(1);
      var dataToDisplay = employeesCopy.filter(employee => {
        var values = Object.values(employee).map(val => {
          return val.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        }).join(' ');
        return values.includes(e.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase());
      });
      setEmployees(dataToDisplay);
    } else {
      setEmployees(employeesCopy);
    }
  }

  return /*#__PURE__*/_jsxs("label", {
    children: ["Search:", /*#__PURE__*/_jsx("input", {
      type: "search",
      className: "datatable-search-input",
      placeholder: "",
      onChange: handleChange
    })]
  });
}

export default DataTableSearch;