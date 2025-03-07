import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Flashcards</h1>
      <p>Your personal study companion</p>
      <div className="home-actions">
        <Link to="/create" className="action-button">
          Create New Flashcards
        </Link>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Study</h3>
            <p>Practice with your flashcards</p>
          </div>
          <div className="feature-card">
            <h3>Organize</h3>
            <p>Keep your study materials organized</p>
          </div>
          <div className="feature-card">
            <h3>Track Progress</h3>
            <p>Monitor your learning journey</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
