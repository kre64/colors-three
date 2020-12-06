import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const App = () => {
	const [game, setGame] = useState(false);
	const [show, setShow] = useState(true);

	const handleClose = () => {
		setShow(false);
		setGame(true);
	};
	const handleShow = () => setShow(true);

	return (
		<div className="App">
			<Header game={game} />
			<GameBoard game={game} />

			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title>How to play</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Colors Three is a game that will score your reflex and
					reaction times.
					<br />
					<br />
					Click the appropriately colored buttons as long as you can.
					<br />
					<br />
					Good luck &#128516;
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="outline-primary"
						onClick={handleClose}
						block
					>
						Play
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default App;
