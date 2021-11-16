import React, { useState, useEffect } from 'react';
import { SortUp } from './images/SortUp';
import { SortDown } from './images/SortDown';
import { UserContext } from './DataTables';
import sortBy from './sortBy';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function TableHeadTh({
  arrowClicked,
  setArrowClicked,
  dataType,
  thName,
  id
}) {
  const value = React.useContext(UserContext);
  const [upIsClicked, setUpIsClicked] = useState(false);
  const [downIsClicked, setDownIsClicked] = useState(false);
  const [resetUp, setResetUp] = useState(false);
  const [resetDown, setResetDown] = useState(false); //Reset all the arrows when a new one is clicked

  useEffect(() => {
    if (!arrowClicked) {
      setUpIsClicked(false);
      setDownIsClicked(false);
    }
  }, [arrowClicked]); //activate an arrow Up after the reset

  useEffect(() => {
    if (resetUp) {
      setUpIsClicked(true);
      setArrowClicked(true);
      setResetUp(false);
    }
  }, [resetUp, setArrowClicked]); //activate an arrow Down after the reset

  useEffect(() => {
    if (resetDown) {
      setDownIsClicked(true);
      setArrowClicked(true);
      setResetDown(false);
    }
  }, [resetDown, setArrowClicked]); //sort the table and change the arrow style

  function handleClickUp() {
    if (!upIsClicked) {
      if (!arrowClicked) {
        setUpIsClicked(true);
        setArrowClicked(true);
      } else {
        setArrowClicked(false);
        setResetUp(true);
      }

      sortBy('up', dataType, value.employees, value.setEmployees);
    }
  } //sort the table and change the arrow style


  function handleClickDown() {
    if (!downIsClicked) {
      if (!arrowClicked) {
        setDownIsClicked(true);
        setArrowClicked(true);
      } else {
        setArrowClicked(false);
        setResetDown(true);
      }

      sortBy('down', dataType, value.employees, value.setEmployees);
    }
  }

  return /*#__PURE__*/_jsxs("th", {
    id: id,
    className: "dataTable-th",
    children: [thName, /*#__PURE__*/_jsxs("div", {
      className: "sort-icon",
      children: [/*#__PURE__*/_jsx(SortUp, {
        onClick: handleClickUp,
        className: upIsClicked ? "dataTable-up clicked" : "dataTable-up"
      }), /*#__PURE__*/_jsx(SortDown, {
        onClick: handleClickDown,
        className: downIsClicked ? "dataTable-down clicked" : "dataTable-down"
      })]
    })]
  });
}

export default TableHeadTh;