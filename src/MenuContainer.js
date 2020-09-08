import React, { Component } from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
//
class MenuContainer extends Component {
	constructor (props) {
		super(props);
		this.state = {
			visible: false
		}
		this.handleMouseDown = this.handleMouseDown.bind(this);
		this.toggleMenu = this.toggleMenu.bind(this);
	}
	handleMouseDown (e) {
		this.toggleMenu();
		console.log('clicked');
		e.stopPropagation();
	}
	toggleMenu () {
		this.setState({
			visible: !this.state.visible
		});
	}
	render () {
		console.log("Rendering: MenuContainer");
		return (
			<div>
				<MenuButton handleMouseDown={this.handleMouseDown} />
				<Menu handleMouseDown={this.handleMouseDown} 
						menuVisibility={this.state.visible} />
				<div>
					<p>Spot the item that doesn't fit with the rest of this list</p>
					<ul>
						<li>Amazon EC2</li>
						<li>Amazon S3</li>
						<li>Amazon Aurora</li>
						<li>Amazon DynamoDB</li>
						<li>Amazon IoT</li>
						<li>Amazon VPC</li>
						<li>Indigenous tribes of the Amazon rainforest</li>
						<li>Amazon Lightsail</li>
						<li>Amazon SageMaker</li>
					</ul>
				</div>
			</div>
		);
	}
}
export default MenuContainer;
