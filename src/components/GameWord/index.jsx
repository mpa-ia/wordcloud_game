import React from 'react'
import PropTypes from 'prop-types';

const GameWord = ({ selectWord, checkMode, isWordSelected, isGoodWord, word }) =>
	<div
		className={checkMode ? 'not_clickable' : ''}
		onClick={checkMode ? null : selectWord.bind(null, word)}
	>
		<span
			className={`
			${!checkMode && isWordSelected ? 'selected' : ''}
			${checkMode && isWordSelected ? isGoodWord ? 'good' : 'wrong' : ''} 
			`}
		>
			{word}
			{checkMode && isWordSelected ?
				<i
					className={isGoodWord ? 'good' : 'wrong'}
				>
					{isGoodWord ? 'Good!' : 'Wrong!'}
				</i>
				: null}
		</span>
	</div>
	;
GameWord.propTypes = {
	word: PropTypes.string,
	checkMode: PropTypes.bool.isRequired,
	isGoodWord: PropTypes.bool.isRequired,
	isWordSelected: PropTypes.bool.isRequired,
	selectWord: PropTypes.func.isRequired,
};
export default GameWord;