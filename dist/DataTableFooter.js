import React, { useState, useEffect } from 'react';
import { DoubleArrowLeft } from './images/DoubleArrowLeft';
import { DoubleArrowRight } from './images/DoubleArrowRight';
import { ArrowRight } from './images/ArrowRight';
import { ArrowLeft } from './images/ArrowLeft';
import { UserContext } from './DataTables';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function DataTableFooter() {
  const [pagesArray, setPagesArray] = useState([]);
  const [numberOfPages, setNumberOfPage] = useState(1);
  const value = React.useContext(UserContext);
  const employeesRow = pagesArray.map((page, index) => {
    if (Math.abs(index + 1 - value.indexPages) <= 4 || value.indexPages <= 5 && index <= 8 || index + 1 === numberOfPages || numberOfPages - value.indexPages <= 4 && numberOfPages - index <= 9) {
      return value.indexPages === page ? /*#__PURE__*/_jsx("div", {
        children: /*#__PURE__*/_jsx("span", {
          onClick: () => value.setIndexPages(page),
          className: "page-index active",
          children: page
        })
      }, page) : /*#__PURE__*/_jsxs("div", {
        className: "page-number-div",
        children: [numberOfPages - value.indexPages > 5 && index + 1 === numberOfPages && /*#__PURE__*/_jsx("div", {
          className: "point-before-number",
          children: "..."
        }), /*#__PURE__*/_jsx("span", {
          onClick: () => value.setIndexPages(page),
          className: "page-index",
          children: page
        }, page)]
      }, page);
    } else return null;
  });

  const numberEntries = () => {
    if (value.employees.length < value.sliceEnd) {
      return value.employees.length;
    } else {
      return value.sliceEnd;
    }
  };

  useEffect(() => {
    if (value.employees.length === 0) {
      setNumberOfPage(1);
    } else {
      setNumberOfPage(Math.ceil(value.employees.length / value.showEntries));
    }

    var rows = [];

    for (var i = 0; i < numberOfPages; i++) {
      rows.push(i + 1);
      setPagesArray(rows);
    }
  }, [numberOfPages, value.employees.length, value.showEntries]);

  function handleClickPreviousPage() {
    if (value.indexPages > 1) {
      value.setIndexPages(value.indexPages - 1);
    }
  }

  function handleClickNextPage() {
    if (value.indexPages < numberOfPages) {
      value.setIndexPages(value.indexPages + 1);
    }
  }

  return /*#__PURE__*/_jsxs("div", {
    className: "dataTable-footer",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "dataTables-info",
      children: ["Showing ", value.employees.length === 0 ? /*#__PURE__*/_jsx("b", {
        children: value.sliceBegin
      }) : /*#__PURE__*/_jsx("b", {
        children: value.sliceBegin + 1
      }), " to ", /*#__PURE__*/_jsx("b", {
        children: numberEntries()
      }), " of ", /*#__PURE__*/_jsx("b", {
        children: value.employees.length
      }), " entries"]
    }), /*#__PURE__*/_jsxs("div", {
      className: "dataTable-paginate",
      children: [/*#__PURE__*/_jsx("span", {
        className: value.indexPages !== 1 ? "page-index scale" : "page-index disable ",
        onClick: () => value.setIndexPages(1),
        children: /*#__PURE__*/_jsx(DoubleArrowLeft, {})
      }), /*#__PURE__*/_jsx("span", {
        onClick: handleClickPreviousPage,
        className: value.indexPages > 1 ? "page-index" : "page-index disable",
        children: /*#__PURE__*/_jsx(ArrowLeft, {})
      }), employeesRow, /*#__PURE__*/_jsx("span", {
        onClick: handleClickNextPage,
        className: value.indexPages !== numberOfPages ? "page-index" : "page-index disable",
        children: /*#__PURE__*/_jsx(ArrowRight, {})
      }), /*#__PURE__*/_jsx("span", {
        className: value.indexPages === numberOfPages ? "page-index disable" : "page-index",
        onClick: () => value.setIndexPages(numberOfPages),
        children: /*#__PURE__*/_jsx(DoubleArrowRight, {})
      })]
    })]
  });
}

export default DataTableFooter;