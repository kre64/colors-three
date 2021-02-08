import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GameButton from "./GameButton";

const INITIAL_THRESHOLD = 3;
const GameBoard = ({ game, new_threshold, handleGameBtnClick }) => {
	const [activeColor, setActiveColor] = useState(null);
	const threshold = useRef(INITIAL_THRESHOLD);
	const DEFAULT_COLOR_MAPPING = {
		0: "red",
		1: "green",
		2: "blue",
	};

	useEffect(() => {
		if (game) {
			if (threshold.current != new_threshold) {
				setActiveColor(Math.floor(Math.random() * 3));
				threshold.current = new_threshold;
			}
		} else {
			threshold.current = INITIAL_THRESHOLD;
			setActiveColor(null);
		}
	}, [game, new_threshold]);

	const checkBtn = (n) => {
		handleGameBtnClick(n === activeColor);
	};

	return (
		<Container fluid className="centered">
			<Row>
				{[0, 1, 2].map((n) => {
					return (
						<Col key={n} onClick={() => checkBtn(n)}>
							<GameButton
								activeColor={activeColor}
								id={n}
								defaultColor={DEFAULT_COLOR_MAPPING[n]}
								gameButtonKey={n}
							></GameButton>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

export default GameBoard;
