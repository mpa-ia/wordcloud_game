import React from 'react'
import GameWord from '../GameWord';

const Game = ({ title, allWords, goodWords, selectWord, selectedWords, checkMode }) => {
	const [wordsWithClassnames, setClassnamesForWords] = React.useState([]);
	React.useEffect(() => {
		const wordsWithRandomClassNames = allWords
			.map(word => ({
			word,
			className: `listItem_${Math.floor(Math.random() * 5) + 1}`
		}))
			.sort(() => Math.random() - 0.5);
		setClassnamesForWords(wordsWithRandomClassNames);
	}, []);
	return (
		<div>
			<h2>{title}</h2>
			<ul>
				{wordsWithClassnames.map(item =>
						<li
							key={item.word}
							className={item.className}
						>
								<GameWord
									word={item.word}
									selectWord={selectWord}
									isGoodWord={goodWords.includes(item.word)}
									isWordSelected={selectedWords.includes(item.word)}
									checkMode={checkMode}
								/>
							</li>
					)}
			</ul>
		</div>
	)
};

export default Game;