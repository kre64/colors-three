import React, { useState, useEffect } from "react";
import Performance from "./Performance";
import Timer from "./Timer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = ({ seconds }) => {
	const [time, setTime] = useState(null);

	useEffect(() => {
		let m = padTime(parseInt(seconds / 60));
		let s = padTime(seconds % 60);
		setTime(`${m}:${s}`);
	}, [seconds]);

	const padTime = (time) => {
		let timeString = time + "";

		if (timeString.length < 2) {
			return `0${timeString}`;
		} else {
			return timeString;
		}
	};

	return (
		<Container fluid className="centered">
			<Row>
				<Col xs={4}>
					<span className="highlight-inverted">Colors Three</span>
				</Col>
				<Col xs={4}>
					<Timer time={time} />
				</Col>
				<Col xs={4}>
					<Performance seconds={seconds} />
				</Col>
			</Row>
		</Container>
	);
};

export default Header;
