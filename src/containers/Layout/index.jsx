import React from 'react'
import { useGameMode } from '../../context/gameMode';
import WelcomePage from '../WelcomePage';
import PlayPage from '../PlayPage';
import FinishPage from '../FinishPage';

const Layout = () => {
	const { gameMode } = useGameMode();
	const switchPages = () => {
		switch (gameMode) {
			case 'welcome':
				return <WelcomePage />;
			case 'play':
				return <PlayPage />;
			case 'finish':
				return <FinishPage />
			default:
				break;
		}
	};
	return (
		<div>
      {switchPages()}
		</div>
	)
};

export default Layout;