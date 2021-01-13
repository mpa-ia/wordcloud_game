
import React from 'react';

const UserContext = React.createContext({ userName: '' });

export const UserProvider = ({ children }) => {
  const [userName, setUserName ] = React.useState('');
	const setUser = username => {
		setUserName(username);
	}
  return (
    <UserContext.Provider value={{ userName, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
	const { userName, setUser } = React.useContext(UserContext);
  return { userName, setUser };
};
