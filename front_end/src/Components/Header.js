import React from "react";
import Performance from '../Components/Performance'
import Timer from '../Components/Timer'

const Header = () => {
	return (
		<nav className="navbar">
			<span className="navbar-brand highlight-inverted">Colors Three</span>
      <Performance />
      <Timer />
		</nav>
	);
};

export default Header;
