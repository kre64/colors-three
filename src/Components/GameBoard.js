import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Target from "./Target";
import GameButton from "./GameButton";

const GameBoard = ({ game }) => {
	const [activeColor, setActiveColor] = useState("");
	const [time, setTime] = useState(3000);

	const COLORS = [0, 1, 2];
	const DEFAULT_COLOR_MAPPING = {
		0: "red",
		1: "green",
		2: "blue",
	};

	useEffect(() => {
		if (game) {
			const timeout = setInterval(() => {
				setActiveColor(Math.floor(Math.random() * 3));
				console.log(activeColor);
			}, time);

			return () => {
				clearInterval(timeout);
			};
		}
	}, [activeColor, game]);

	return (
		<Container fluid className="centered">
			<Row>
				{COLORS.map((n) => {
					return (
						<Col key={n}>
							<GameButton
								game={game}
								activeColor={activeColor}
								id={n}
								defaultColor={DEFAULT_COLOR_MAPPING[n]}
								gameButtonKey={n}
							></GameButton>
						</Col>
					);
				})}
			</Row>
			<hr></hr>
			<Row>
				<Col style={{ display: "flex", justifyContent: "center" }}>
					{game ? <Target activeColor={activeColor} /> : ""}
				</Col>
			</Row>
		</Container>
	);
};

export default GameBoard;
