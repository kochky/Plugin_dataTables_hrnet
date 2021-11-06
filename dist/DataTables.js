import React, { useState } from 'react';
import RowTr from './RowTr';
import ShowEntries from './ShowEntries';
import DataTableFooter from './DataTableFooter';
import DataTableHead from './DataTableHead';
import DataTableSearch from './DataTableSearch';
import './style.css';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function DataTables({
  label,
  data
}) {
  const [employees, setEmployees] = useState(data);
  const [showEntries, setShowEntries] = useState(10);
  const [indexPages, setIndexPages] = useState(1); //control the .map() with slice 

  const sliceBegin = indexPages * showEntries - showEntries;
  const sliceEnd = indexPages * showEntries;
  console.log(employees.length);
  return /*#__PURE__*/_jsxs("div", {
    className: "dataTables-wrapper",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "dataTables-top",
      children: [/*#__PURE__*/_jsx(ShowEntries, {
        setIndexPages: setIndexPages,
        showEntries: showEntries,
        setShowEntries: setShowEntries
      }), /*#__PURE__*/_jsx(DataTableSearch, {
        setIndexPages: setIndexPages,
        employees: employees,
        setEmployees: setEmployees
      })]
    }), /*#__PURE__*/_jsxs("table", {
      className: "dataTable-table",
      children: [/*#__PURE__*/_jsx(DataTableHead, {
        label: label,
        employees: employees,
        setEmployees: setEmployees
      }), employees.length > 0 ? /*#__PURE__*/_jsx("tbody", {
        className: "dataTable-body",
        children: employees.slice(sliceBegin, sliceEnd).map((employee, index) => /*#__PURE__*/_jsx(RowTr, {
          data: employee
        }, index + employee.lastName))
      }) : /*#__PURE__*/_jsx("div", {
        className: "datatable-blank",
        children: "the database is empty !"
      })]
    }), /*#__PURE__*/_jsx(DataTableFooter, {
      sliceBegin: sliceBegin,
      sliceEnd: sliceEnd,
      employeesLength: employees.length,
      showEntries: showEntries,
      indexPages: indexPages,
      setIndexPages: setIndexPages
    })]
  });
}

export default DataTables;