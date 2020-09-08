import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MenuContainer from "./MenuContainer";

var destination = document.querySelector('#container');

/* basic functionality
menu should be shown or hidden as follows:
1. on button click, menu slides into view
2. when you click anywhere on the menu it should slide out of view
 */

ReactDOM.render(
	<MenuContainer />,
	destination
);


