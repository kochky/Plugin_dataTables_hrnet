import React from "react";
import ReactDOM from "react-dom";

import DataTables from './lib/DataTables'
import propsExample from './propsExample'
import dataUser from './dataUser'

ReactDOM.render(
    <DataTables  label={propsExample} data={dataUser}/>, 
document.getElementById("root"));