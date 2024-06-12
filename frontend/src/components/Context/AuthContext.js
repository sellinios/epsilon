// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import API from '../../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    try {
      const response = await API.post('/dj-rest-auth/login/', { username, password });
      localStorage.setItem('token', response.data.key);
      setUser(response.data.user);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const logout = () => {
    API.post('/dj-rest-auth/logout/');
    localStorage.removeItem('token');
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      API.get('/dj-rest-auth/user/')
        .then(response => setUser(response.data))
        .catch(() => logout());
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
