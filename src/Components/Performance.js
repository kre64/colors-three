import React, { useState, useEffect } from "react";

const Performance = ({ game, seconds }) => {
	const [performance, setPerformance] = useState("0");

	const LEVELS = {
		0: "🐣",
		1: "😃",
		2: "😄",
		3: "😁",
		4: "😋",
		5: "😜",
		6: "🤪",
		7: "🤩",
		8: "👀",
		9: "🤯",
		10: "🔥",
	};

	useEffect(() => {
		if (game) {
			let levelsKey = Math.floor(seconds / 100);
			if (!LEVELS[levelsKey]) {
				console.log(`Level ${levelsKey} not found in LEVELS!`);
				setPerformance("placeholder perf");
			} else {
				setPerformance(LEVELS[levelsKey]);
			}
		}
	}, [seconds, LEVELS, game]);

	return <h1>{performance}</h1>;
};

export default Performance;
