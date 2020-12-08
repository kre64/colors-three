import React, { useState, useEffect } from "react";
import Performance from "./Performance";
import Timer from "./Timer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = ({ game }) => {
	const [time, setTime] = useState("");
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		if (game) {
			const timeout = setInterval(() => {
				setSeconds((seconds) => seconds + 1);
				let m = padTime(parseInt(seconds / 60));
				let s = padTime(seconds % 60);
				setTime(`${m}:${s}`);
			}, 1000);
	
			return () => {
				clearInterval(timeout);
			};
		} else {
			console.log("game not live")
		}
		// const timeout = setInterval(() => {
		// 	setSeconds((seconds) => seconds + 1);
		// 	let m = padTime(parseInt(seconds / 60));
		// 	let s = padTime(seconds % 60);
		// 	setTime(`${m}:${s}`);
		// }, 1000);

		// return () => {
		// 	clearInterval(timeout);
		// };
	}, [seconds, time, game]);

	const padTime = (time) => {
		let timeString = time + "";

		if (timeString.length < 2) {
			return `0${timeString}`;
		} else {
			return timeString;
		}
	};

	return (
		<Container fluid center className="centered">
			<Row>
				<Col xs={4}>
					<span className="highlight-inverted">Colors Three</span>
				</Col>
				<Col xs={4}>
					{game ? <Timer time={time} /> : <Timer time={"⏱"} />}
				</Col>
				<Col xs={4}>
					<Performance game={game} seconds={seconds}/>
				</Col>
			</Row>
		</Container>
	);
};

export default Header;
