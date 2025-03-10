import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AuthPage.css';

interface SignUpFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
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

    console.log("Submitting signup request to API:", formData); // ✅ Log data before sending


    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/api/auth/signup', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });
      console.log("API Response Status:", response.status); // ✅ Log response status
      const data = await response.json();
      console.log("API Response Data:", data); // ✅ Log API response

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      // Show success message
      setError('Registration successful! Redirecting to login...');
      
      // Redirect to login page after 2 seconds
      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Create Account</h2>
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
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
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
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
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
            Sign Up
          </button>
        </form>
        <div className="auth-switch">
          <p>
            Already have an account?{' '}
            <button onClick={() => navigate('/login')} className="switch-button">
              Log In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage; 