import React, { useState, useEffect } from 'react';
import { DoubleArrowLeft } from './images/DoubleArrowLeft';
import { DoubleArrowRight } from './images/DoubleArrowRight';
import { ArrowRight } from './images/ArrowRight';
import { ArrowLeft } from './images/ArrowLeft';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function DataTableFooter({
  sliceBegin,
  sliceEnd,
  employeesLength,
  showEntries,
  indexPages,
  setIndexPages
}) {
  const [pagesArray, setPagesArray] = useState([]);
  const [numberOfPages, setNumberOfPage] = useState(1);
  const employeesRow = pagesArray.map((page, index) => {
    console.log(index, indexPages - index + 1);
    console.log(index, numberOfPages - indexPages);

    if (Math.abs(index + 1 - indexPages) <= 4 || indexPages <= 5 && index <= 8 || index + 1 === numberOfPages || numberOfPages - indexPages <= 4 && numberOfPages - index <= 9) {
      return indexPages === page ? /*#__PURE__*/_jsx("div", {
        children: /*#__PURE__*/_jsx("span", {
          onClick: () => setIndexPages(page),
          className: "page-index active",
          children: page
        })
      }, page) : /*#__PURE__*/_jsxs("div", {
        className: "page-number-div",
        children: [numberOfPages - indexPages > 5 && index + 1 === numberOfPages && /*#__PURE__*/_jsx("div", {
          className: "point-before-number",
          children: "..."
        }), /*#__PURE__*/_jsx("span", {
          onClick: () => setIndexPages(page),
          className: "page-index",
          children: page
        }, page)]
      }, page);
    } else return null;
  });

  const numberEntries = () => {
    if (employeesLength < sliceEnd) {
      return employeesLength;
    } else {
      return sliceEnd;
    }
  };

  useEffect(() => {
    if (employeesLength === 0) {
      setNumberOfPage(1);
    } else {
      setNumberOfPage(Math.ceil(employeesLength / showEntries));
    }

    var rows = [];

    for (var i = 0; i < numberOfPages; i++) {
      rows.push(i + 1);
      setPagesArray(rows);
    }
  }, [numberOfPages, employeesLength, showEntries]);

  function handleClickPreviousPage() {
    if (indexPages > 1) {
      setIndexPages(indexPages - 1);
    }
  }

  function handleClickNextPage() {
    if (indexPages < numberOfPages) {
      setIndexPages(indexPages + 1);
    }
  }

  return /*#__PURE__*/_jsxs("div", {
    className: "dataTable-footer",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "dataTables-info",
      children: ["Showing ", employeesLength === 0 ? /*#__PURE__*/_jsx("b", {
        children: sliceBegin
      }) : /*#__PURE__*/_jsx("b", {
        children: sliceBegin + 1
      }), " to ", /*#__PURE__*/_jsx("b", {
        children: numberEntries()
      }), " of ", /*#__PURE__*/_jsx("b", {
        children: employeesLength
      }), " entries"]
    }), /*#__PURE__*/_jsxs("div", {
      className: "dataTable-paginate",
      children: [/*#__PURE__*/_jsx("span", {
        className: indexPages !== 1 ? "page-index scale" : "page-index disable ",
        onClick: () => setIndexPages(1),
        children: /*#__PURE__*/_jsx(DoubleArrowLeft, {})
      }), /*#__PURE__*/_jsx("span", {
        onClick: handleClickPreviousPage,
        className: indexPages > 1 ? "page-index" : "page-index disable",
        children: /*#__PURE__*/_jsx(ArrowLeft, {})
      }), employeesRow, /*#__PURE__*/_jsx("span", {
        onClick: handleClickNextPage,
        className: indexPages !== numberOfPages ? "page-index" : "page-index disable",
        children: /*#__PURE__*/_jsx(ArrowRight, {})
      }), /*#__PURE__*/_jsx("span", {
        className: indexPages === numberOfPages ? "page-index disable" : "page-index",
        onClick: () => setIndexPages(numberOfPages),
        children: /*#__PURE__*/_jsx(DoubleArrowRight, {})
      })]
    })]
  });
}

export default DataTableFooter;