import React from "react";

const GameButton = ({ game, color, id, gameButtonKey }) => {
	return <button className="gameButton">{color === id ? color : ""}</button>;
};

export default GameButton;
