import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
	render() {
		console.log("Rendering: Menu");
		var visibility = "hide";
		if (this.props.menuVisibility) {
			visibility = "show";
		}
		return (
			<div id="flyoutMenu"
					onMouseDown={this.props.handleMouseDown}
					className={visibility}>
				<h2><a href="https://github.com/lovetobuildstuff">Home</a></h2>
				<h2><a href="https://www.linkedin.com/in/jalake/">About</a></h2>
				<h2><a href="https://www.linkedin.com/in/jalake/">Contact</a></h2>
				<h2><a href="https://github.com/lovetobuildstuff">Search</a></h2>
			</div>
		);
	}
}
export default Menu;
