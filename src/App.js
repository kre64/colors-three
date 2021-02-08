import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const INITIAL_DECAY = 10;

const App = () => {
	const [game, setGame] = useState(false);
	const [show, setShow] = useState(true);
	const [seconds, setSeconds] = useState(0);
	const [attempts, setAttemps] = useState(0);
	const [threshold, setThreshold] = useState(0);
	const [decay, setDecay] = useState(INITIAL_DECAY);

	const handleClose = () => {
		setShow(false);
		setGame(true);
	};

	const handleShow = () => setShow(true);

	useEffect(() => {
		if (game) {
			const interval = setInterval(() => {
				setSeconds((seconds) => seconds + 1);
			}, 1000);

			return () => {
				clearInterval(interval);
			};
		}
	}, [game]);

	const handleGameBtnClick = (clicked_right_button) => {
		if (clicked_right_button) {
			increaseDecay();
		} else {
			killGame();
		}
	};

	const increaseDecay = () => {
		console.log(`${seconds} + ${Math.floor(decay - 0.25)}`);
		setThreshold(seconds + Math.floor(decay - 0.25));
		setDecay((decay) => decay - 0.25);
	};

	const killGame = () => {
		setGame(false);
		setSeconds(0);
		setAttemps((attempts) => attempts + 1);
		handleShow();
	};

	if (seconds > threshold) {
		increaseDecay();
	}

	return (
		<div className="App">
			<Header seconds={seconds} />
			<GameBoard
				game={game}
				new_threshold={threshold}
				handleGameBtnClick={handleGameBtnClick}
			/>

			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
				centered
			>
				<Modal.Body className="justify-content-center text-center">
					Colors Three is a game to test your reflexes.
					<br />
					<br />
					Click the button that fully lights up, missing means{" "}
					<b>GAME OVER.</b>
					<br />
					<br />
					{attempts ? `Attempt # ${attempts}` : "Good luck 😄"}
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="outline-primary"
						onClick={handleClose}
						block
					>
						{attempts ? "Go Again" : "Start Game"}
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default App;
