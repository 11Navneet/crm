import React, {useState, createContext} from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [usersData, setUsersData] = useState([]);
	return (
		<UserContext.Provider value={{ usersData, setUsersData }}>
			{children}
		</UserContext.Provider>
	);
};