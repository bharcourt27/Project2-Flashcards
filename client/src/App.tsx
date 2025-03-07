import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import CreateFlashcard from './pages/CreateFlashcard';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Dashboard from './pages/Dashboard';
import './App.css';

// Protected Route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

const App: React.FC = () => {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <div className="app-container">
        <nav className="main-nav">
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/create">Create Flashcard</a>
          </div>
          <div className="auth-links">
            {token ? (
              <button
                onClick={() => {
                  localStorage.removeItem('token');
                  localStorage.removeItem('user');
                  localStorage.removeItem('lastUsedDeck');
                  window.location.href = '/login';
                }}
                className="logout-button"
              >
                Logout
              </button>
            ) : (
              <div className="auth-buttons">
                <a href="/login" className="login-button">Login</a>
                <a href="/signup" className="signup-button">Sign Up</a>
              </div>
            )}
          </div>
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/create"
              element={
                <ProtectedRoute>
                  <CreateFlashcard />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
