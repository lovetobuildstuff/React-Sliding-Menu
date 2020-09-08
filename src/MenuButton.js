import React, { PureComponent } from "react";
import "./MenuButton.css";

class MenuButton extends PureComponent {
/*
	// This is used if we're utilizing Component rather than PureComponent to handle unnecessary rendering
	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.handleMouseDown === this.props.handleMouseDown) {
			return false;
		} else {
			return true;
		}
	}

*/
	render () {
		console.log("Rendering: MenuButton");
		return (
			<button id="roundButton" onMouseDown={this.props.handleMouseDown}></button>

		);
	}
}
export default MenuButton;
