import React from "react";
import Performance from '../Components/Performance'
import Timer from '../Components/Timer'

function Header(props) {
	return (
		<nav className="navbar">
			<span className="navbar-brand highlight-inverted">Colors Three</span>
      <Timer />
      <Performance />
		</nav>
	);
};

export default Header;
