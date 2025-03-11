import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../utils/auth.js';
import '../styles/AuthPage.css';
import {login} from '../api/authAPI.js'

interface LoginFormData {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: '',
  });
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      //PLEASE DONT CHANGE CODE BELOW. IT WORKS
    const data = await login(formData)
      auth.login(data.token)
      
      // Show success message
      setError('Login successful! Redirecting to dashboard...');
      
      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        navigate('/');
      }, 2000);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Welcome Back!</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          {error && (
            <div className={`message ${error.includes('successful') ? 'success' : 'error'}`}>
              {error}
            </div>
          )}
          <button type="submit" className="auth-button">
            Log In
          </button>
        </form>
        <div className="auth-switch">
          <p>
            Don't have an account?{' '}
            <button onClick={() => navigate('/SignUpPage')} className="switch-button">
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 