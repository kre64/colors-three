import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Target from "./Target";
import GameButton from "./GameButton";

const GameBoard = (props) => {
	return (
		<Container fluid center className="centered">
			<Row>
				<Col>
					<GameButton></GameButton>
				</Col>
				<Col>
					<GameButton></GameButton>
				</Col>
				<Col>
					<GameButton></GameButton>
				</Col>
			</Row>
			<hr></hr>
			<Row>
				<Col style={{display: 'flex', justifyContent: 'center'}}>
					<Target />
				</Col>
			</Row>
		</Container>
	);
};

export default GameBoard;
