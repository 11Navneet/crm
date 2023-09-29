import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { UserProvider } from "./utils/contexts/UserContext";
import { LeadProvider } from "./utils/contexts/LeadContext";
import { AttendanceProvider } from "./utils/contexts/AttendanceContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AttendanceProvider>
        <UserProvider>
          <LeadProvider>
            <App />
          </LeadProvider>
        </UserProvider>
      </AttendanceProvider>
    </BrowserRouter>
  </React.StrictMode>
);
