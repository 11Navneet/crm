import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from './utils/contexts/UserContext';
import App from './App';
import { LeadProvider } from './utils/contexts/LeadContext';
import { AttendanceProvider } from './utils/contexts/AttendanceContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <LeadProvider>
          <AttendanceProvider>
            <App />
          </AttendanceProvider>
        </LeadProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);


