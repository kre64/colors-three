import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Target from "./Target";
import GameButton from "./GameButton";

const GameBoard = ({ game }) => {
	const [color, setColor] = useState('');
	const [time, setTime] = useState(3000);

	const COLORS = [0, 1, 2];

	useEffect(() => {
		if (game) {
			const timeout = setInterval(() => {
				setColor(Math.floor(Math.random() * 3));
				console.log(color);
			}, time);

			return () => {
				clearInterval(timeout);
			};
		}
	}, [color, game]);

	return (
		<Container fluid center className="centered">
			<Row>
				{COLORS.map((n) => {
					return (
						<Col key={n}>
							<GameButton
								game={game}
								color={color}
								id={n}
								key={n}
							></GameButton>
						</Col>
					);
				})}
			</Row>
			<hr></hr>
			<Row>
				<Col style={{ display: "flex", justifyContent: "center" }}>
					{game ? <Target color={color} /> : ""}
				</Col>
			</Row>
		</Container>
	);
};

export default GameBoard;
