import React, {useState, createContext} from 'react';

export const AttendanceContext = createContext();

export const AttendanceProvider = ({ children }) => {
	const [attendanceData, setAttendanceData] = useState([]);
	return (
		<AttendanceContext.Provider value={{ attendanceData, setAttendanceData }}>
			{children}
		</AttendanceContext.Provider>
	);
};