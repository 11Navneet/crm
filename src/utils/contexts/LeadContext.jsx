import React, {useState, createContext} from 'react';

export const LeadContext = createContext();

export const LeadProvider = ({ children }) => {
	const [leadsData, setLeadsData] = useState([]);
	return (
		<LeadContext.Provider value={{ leadsData, setLeadsData }}>
			{children}
		</LeadContext.Provider>
	);
};