import React from 'react'
import PropTypes from 'prop-types';

const StartGameForm = ({ onSubmit }) => (
	<form onSubmit={onSubmit}>
		<input
			type="text"
			placeholder="Enter your nickname here..."
			required
			minLength="2"
		/>
		<button type="submit">Play</button>
	</form>
);

StartGameForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};
export default StartGameForm;