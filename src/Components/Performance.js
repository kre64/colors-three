import React, { useState, useEffect } from "react";

const Performance = ({ seconds }) => {
	const [performance, setPerformance] = useState("0");

	const LEVELS = {
		0: "🐣",
	};

	useEffect(() => {
		let levelsKey = Math.floor(seconds / 100);
		if (!LEVELS[levelsKey]) {
			console.log(`Level ${levelsKey} not found in LEVELS!`);
			setPerformance("placeholder perf");
		} else {
			setPerformance(LEVELS[levelsKey]);
		}
	}, [seconds, LEVELS]);

	return <h1>{performance}</h1>;
};

export default Performance;
