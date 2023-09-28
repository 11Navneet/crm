
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

  const getLeadById = (id) => {
    // Implement logic to fetch lead by ID from the leads array
    return leads.find((lead) => lead.id === id);
  };
  

  const value = {
    leads,
    addLead,
    deleteLead,
    getLeadById, // Add the getLeadById function to the context
  };

  return <LeadContext.Provider value={value}>{children}</LeadContext.Provider>;
}

export function useLeadContext() {
  return useContext(LeadContext);
}
