import React, { useState, useEffect } from "react";

const Performance = ({ game, seconds }) => {
	const [performance, setPerformance] = useState("0");

	const LEVELS = {
		0: "Level 1 🐣",
		1: "Level 2 😃",
		2: "Level 3 😄",
		3: "Level 4 😁",
		4: "Level 5 😋",
		5: "Level 6 😜",
		6: "Level 7 🤪",
		7: "Level 8 🤩",
		8: "Level 9 👀",
		9: "Level 10 🤯",
		10: "Level ??? 💯",
	};

	useEffect(() => {
		if (game) {
			let levelsKey = Math.floor(seconds / 60);
			if (!LEVELS[levelsKey]) {
				setPerformance("🔥");
			} else {
				setPerformance(LEVELS[levelsKey]);
			}
		}
	}, [seconds, LEVELS, game]);

	return <h1>{performance}</h1>;
};

export default Performance;
