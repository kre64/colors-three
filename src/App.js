import React, { useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import GameBoard from "./Components/GameBoard";

const App = () => {
	const [game, setGame] = useState(false);
	
	return (
		<div className="App">
			<Header />
			<GameBoard game={game}/>
		</div>
	);
}

export default App;
