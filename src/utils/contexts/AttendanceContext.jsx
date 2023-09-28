import React, {useState, createContext} from 'react';

export const AttendanceContext = createContext();

export const AttendanceProvider = ({ children }) => {
	const [AttendanceData, setAttendanceData] = useState([]);
	return (
		<AttendanceContext.Provider value={{ AttendanceData, setAttendanceData }}>
			{children}
		</AttendanceContext.Provider>
	);
};