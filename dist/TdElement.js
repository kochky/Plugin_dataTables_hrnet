import React, { useState } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function TdElement({
  id,
  typeData
}) {
  const [openOverflow, setOpenOverflow] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [cursor, setCursor] = useState('auto');

  function handleClick(e) {
    e.preventDefault();
    e.target.clientWidth < e.target.scrollWidth && setOpenOverflow(true);

    if (window.screen.width - e.clientX < 300) {
      setMouseX(e.clientX + window.pageXOffset - 310);
    } else {
      setMouseX(e.clientX + window.pageXOffset + 5);
    }

    setMouseY(e.clientY + window.pageYOffset + 5);
  }

  function handleMouseEnter(e) {
    e.target.clientWidth < e.target.scrollWidth && setCursor('zoom-in');
  }

  function handleMouseLeave(e) {
    setOpenOverflow(false);
    setCursor('auto');
  }

  return /*#__PURE__*/_jsx(React.Fragment, {
    children: /*#__PURE__*/_jsxs("td", {
      style: {
        cursor: cursor
      },
      onMouseEnter: e => handleMouseEnter(e),
      onMouseLeave: e => handleMouseLeave(e),
      onClick: e => handleClick(e),
      id: id,
      className: "dataTable-td",
      children: [typeData, openOverflow && /*#__PURE__*/_jsx("span", {
        style: {
          left: mouseX,
          top: mouseY
        },
        className: "div-hover",
        children: typeData
      })]
    })
  });
}

export default TdElement;