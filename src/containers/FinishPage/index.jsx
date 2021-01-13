import React from 'react'
import { useGameMode } from '../../context/gameMode';
import { useUser } from '../../context/user';

const FinishPage = () => {
	const { score } = useGameMode();
	const { userName } = useUser();
	return (
		<>
			<p>Congratulations, {userName}!</p>
			<p>Your score:</p>
			<p className="info">{score} points</p>
		</>
	)
};

export default FinishPage;