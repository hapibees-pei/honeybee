import React, { createContext, useContext, useState, useEffect } from "react";
import Router from "next/router";
import PropTypes from "prop-types";
import { login, logout, getProfile } from "../api/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [fetchingInitialUser, setFetchingInitialUser] = useState(true);

  useEffect(() => {
    fetchInitialUser();
  }, []);

  async function fetchInitialUser() {
    const response = await getProfile();

    setUser(response);
  
    setFetchingInitialUser(false);
  }

  async function handleLogin(email, password) {
    const response = await login(email, password);

    localStorage.setItem("token", response.token);
    
    const profile = await getProfile();

    setUser(profile);
    
    Router.push('/' + profile.role);
  }

  function handleLogout() {
    logout();
    setUser(null);
  }

  // While fetching the initial user, do not render anything
  // On a real app, show a loading spinner or equivalent
  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      {fetchingInitialUser ? null : children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node
};

AuthProvider.defaultProps = {
  children: null
};

/**
 * @returns {{user, handleLogin, handleLogout}}
 */

export const useAuth = () => useContext(AuthContext);