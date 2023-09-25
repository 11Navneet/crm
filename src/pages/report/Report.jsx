import React from 'react';
import './report.css';

export default function Report() {
  // Sample data for multiple cards
  const cardsData = [
    {
      name: 'John Doe',
      avatar: 'https://via.placeholder.com/100',
      assignedLeads: 25,
      qualifiedLeads: 10,
      disqualifiedLeads: 5,
    },
    {
      name: 'Jane Smith',
      avatar: 'https://via.placeholder.com/100',
      assignedLeads: 18,
      qualifiedLeads: 12,
      disqualifiedLeads: 6,
    },
    {
        name: 'Jane Smith',
        avatar: 'https://via.placeholder.com/100',
        assignedLeads: 18,
        qualifiedLeads: 12,
        disqualifiedLeads: 6,
      },
      {
        name: 'Jane Smith',
        avatar: 'https://via.placeholder.com/100',
        assignedLeads: 18,
        qualifiedLeads: 12,
        disqualifiedLeads: 6,
      },
      {
        name: 'Jane Smith',
        avatar: 'https://via.placeholder.com/100',
        assignedLeads: 18,
        qualifiedLeads: 12,
        disqualifiedLeads: 6,
      },
      
    // Add more card data objects here
  ];

  return (
    <div className="cards-container">
      {cardsData.map((user, index) => (
        <div className="card" key={index}>
          <div className="avatar"></div>
          <div className="username">{user.name}</div>
          <div className="assigned-leads">
            <p>Assigned Leads: {user.assignedLeads}</p>
          </div>
          <div className="qualified-leads">
            <p>Qualified Leads: {user.qualifiedLeads}</p>
          </div>
          <div className="disqualified-leads">
            <p>Disqualified Leads: {user.disqualifiedLeads}</p>
          </div>
          <button className="button">View</button>
        </div>
      ))}
    </div>
  );
}
