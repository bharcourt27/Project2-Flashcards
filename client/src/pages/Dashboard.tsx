import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const username = JSON.parse(localStorage.getItem('user') || '{}').username;

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1>Welcome, {username || 'User'}!</h1>
        <div className="dashboard-actions">
          <button 
            className="create-flashcard-btn"
            onClick={() => navigate('/create')}
          >
            Create New Flashcard
          </button>
          <button 
            className="view-decks-btn"
            onClick={() => navigate('/decks')}
          >
            View My Decks
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 