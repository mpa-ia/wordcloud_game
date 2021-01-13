import React, { useEffect, useState } from 'react'
import Game from '../../components/Game';
import { useGameMode } from '../../context/gameMode';

const PlayPage = () => {
	const { setScore, setMode } = useGameMode();
	const [selectedWords, setSelectedWord] = useState([]);
	const [game, setGameData] = useState(null);
	const [checkMode, setCheckMode] = useState(false);
	useEffect(() => {
		fetch('/api/games/')
			.then(response => {
				if (!response.ok) throw Error(response.statusText);
				return response.json();
			})
			.then(data => setGameData(data))
			.catch(e => {
				console.log(e);
			});
	}, []);
	const selectWord = word => {
		if (selectedWords.includes(word)) {
			const filteredWords = selectedWords.filter(word => !selectedWords.includes(word));
			setSelectedWord(filteredWords);
		} else {
			const updatedWords = [...selectedWords];
			updatedWords.push(word);
			setSelectedWord(updatedWords);
		}
	}
	const checkAnswers = () => {
		let selectedCorrectAnswers = 0;
		let selectedWrongAnswers = 0;
		selectedWords.forEach(answer => {
			if (game.good_words.includes(answer)) {
				selectedCorrectAnswers++;
			} else {
				selectedWrongAnswers++;
			}
		});
		const notSelectedCorrectAnswers = game.good_words.length - selectedCorrectAnswers;
		const score = (selectedCorrectAnswers * 2) - (selectedWrongAnswers + notSelectedCorrectAnswers);
		setScore(score);
		setCheckMode(true);
	}
	const finishGame = () => {
		setMode('finish');
		setCheckMode(false);
	}
	return (
		game && Object.entries(game).length ?
			<>
				<Game
					title={game.question}
					allWords={game.all_words}
					
					selectWord={selectWord}
					selectedWords={selectedWords}
					checkMode={checkMode}
					goodWords={game.good_words}
				/>
				<button
					onClick={checkMode ? finishGame : checkAnswers}
				>
					{checkMode ? 'Finish Game' : 'Check Answers'}
				</button>
			</>
			:
			<p>Loading...</p>
	)
};

export default PlayPage;