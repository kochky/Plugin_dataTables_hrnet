import React, { useState, useEffect } from 'react';
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
  let numberOfPages = Math.ceil(employeesLength + 0.00001 / showEntries);
  const employeesRow = pagesArray.map((page, index) => {
    if (Math.abs(index + 1 - indexPages) <= 4 && indexPages > 5 && indexPages < 17 || indexPages <= 5 && index <= 8 || indexPages >= 17 && index >= 11 || index + 1 === numberOfPages) {
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
    var rows = [];

    for (var i = 0; i < numberOfPages; i++) {
      rows.push(i + 1);
      setPagesArray(rows);
    }
  }, [numberOfPages]);

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
        className: indexPages !== 1 ? "page-index" : "page-index disable",
        onClick: () => setIndexPages(1),
        children: /*#__PURE__*/_jsx("i", {
          className: "fas fa-angle-double-left dataTable-arrow"
        })
      }), /*#__PURE__*/_jsx("span", {
        onClick: handleClickPreviousPage,
        className: indexPages > 1 ? "page-index" : "page-index disable",
        children: /*#__PURE__*/_jsx("i", {
          className: "fas fa-angle-left dataTable-arrow"
        })
      }), employeesRow, /*#__PURE__*/_jsx("span", {
        onClick: handleClickNextPage,
        className: indexPages !== numberOfPages ? "page-index" : "page-index disable",
        children: /*#__PURE__*/_jsx("i", {
          className: "fas fa-angle-right dataTable-arrow"
        })
      }), /*#__PURE__*/_jsx("span", {
        className: indexPages === numberOfPages ? "page-index disable" : "page-index",
        onClick: () => setIndexPages(numberOfPages),
        children: /*#__PURE__*/_jsx("i", {
          className: "fas fa-angle-double-right dataTable-arrow"
        })
      })]
    })]
  });
}

export default DataTableFooter;