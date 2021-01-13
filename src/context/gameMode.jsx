
import React from 'react';

const GameModeContext = React.createContext({ gameMode: 'welcome' });

export const GameModeProvider = ({ children }) => {
  const [gameMode, setGameMode] = React.useState('welcome');
  const [score, updateScore] = React.useState(0);
  const setMode = mode => {
    setGameMode(mode);
  }
  const setScore = score => {
    updateScore(score);
  }
  return (
    <GameModeContext.Provider value={{ gameMode, setMode, setScore, score }}>
      {children}
    </GameModeContext.Provider>
  );
};

export const useGameMode = () => {
  const { gameMode, setMode, score, setScore } = React.useContext(GameModeContext);
  return { gameMode, setMode, score, setScore };
};
