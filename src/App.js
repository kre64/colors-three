import React, { useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";

const App = () => {
	const [game, setGame] = useState(false);

	return (
		<div className="App">
			<Header htmlFor="header"/>
			<GameBoard game={game} htmlFor="gameBoard"/>
		</div>
	);
}

export default App;
