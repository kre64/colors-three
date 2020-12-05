import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import GameButton from "../Components/GameButton";

function GameBoard(props) {
	return (
		<Container fluid center className="centered">
			<Row>
				<Col xs={4}>
					<GameButton></GameButton>
				</Col>
				<Col xs={4}>
					<GameButton></GameButton>
				</Col>
				<Col xs={4}>
					<GameButton></GameButton>
				</Col>
			</Row>
		</Container>
	);
}

export default GameBoard;
