import React from "react";
import "./GameButton.scss";

const COLOR_MAPPING = {
	0: "-active",
	1: "-active",
	2: "-active",
};

const GameButton = ({ activeColor, id, defaultColor, gameButtonKey }) => {
	// console.log(activeColor)
	return (
		<button
			className={`gameButton ${defaultColor}${
				activeColor === id ? COLOR_MAPPING[activeColor] : ""
			}`}
		></button>
	);
};

export default GameButton;
