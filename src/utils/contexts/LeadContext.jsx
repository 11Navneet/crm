// LeadContext.js
import React, { createContext, useContext, useState } from "react";

const LeadContext = createContext();

export function LeadProvider({ children }) {
  const [leads, setLeads] = useState([]);

  const addLead = (newLead) => {
    setLeads([...leads, newLead]);
  };

  const deleteLead = (id) => {
    setLeads(leads.filter((lead) => lead.id !== id));
  };

  const value = {
    leads,
    addLead,
    deleteLead,
  };

  return <LeadContext.Provider value={value}>{children}</LeadContext.Provider>;
}

export function useLeadContext() {
  return useContext(LeadContext);
}
