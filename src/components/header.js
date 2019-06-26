import React from 'react';
import './header.css'

const Header = () => {
	return(
		<div> 
			<h1 className="header1">
				Welcome to apple store
			</h1>
			<ul className="navBar">
				<li>Home</li>
				<li>About US</li>
				<li>types</li>
				<li>buy</li>
				<li>review</li>
				<li>contact us</li>
			</ul>
		</div>)
}

export default Header;