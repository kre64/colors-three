import React, { useState, useEffect } from "react";

const Performance = ({ seconds }) => {
	const [performance, setPerformance] = useState(null);
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
		let levelsKey = Math.floor(seconds / 60);
		if (!LEVELS[levelsKey]) {
			setPerformance("🔥");
			return;
		}
		setPerformance(LEVELS[levelsKey]);
	}, [seconds]);

	return <h1>{performance}</h1>;
};

export default Performance;
