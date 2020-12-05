import React from "react";
import Performance from "./Performance";
import Timer from "./Timer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = (props) => {
	return (
		<Container fluid center className="centered">
			<Row>
				<Col xs={4}>
					<span className="highlight-inverted">Colors Three</span>
				</Col>
				<Col xs={4}>
					<Timer />
				</Col>
				<Col xs={4}>
					<Performance />
				</Col>
			</Row>
		</Container>
	);
};

export default Header;
