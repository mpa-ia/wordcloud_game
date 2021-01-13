import React from 'react'
import StartGameForm from '../../components/StartGameForm';
import { useGameMode } from '../../context/gameMode';
import { useUser } from '../../context/user';

const WelcomePage = () => {
	const { setMode } = useGameMode();
	const { setUser } = useUser();

	const startGame = e => {
		e.preventDefault();
		const username = e.target[0].value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
		if (username.length >= 2) {
			setUser(e.target[0].value);
			setMode('play');
		}
	}
	return (
		<div>
			<h1>Wordcloud Game</h1>
			<StartGameForm onSubmit={startGame} />
		</div>
	)
};

export default WelcomePage;