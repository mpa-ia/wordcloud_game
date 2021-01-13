import React from 'react'

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
	)

export default StartGameForm;