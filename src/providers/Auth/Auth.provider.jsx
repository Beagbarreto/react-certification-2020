import React, { useState, useEffect, useContext, useCallback } from 'react';
import { AUTH_STORAGE_KEY } from '../../utils/constants';
import loginApi from '../../utils/services/loginService';
import { storage } from '../../utils/storage';
const AuthContext = React.createContext(null);
function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}
function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);
    setAuthenticated(isAuthenticated);
  }, []);
  const loginProcess = async (username, password) => {
    try {
      await loginApi(username, password);
      setAuthenticated(true);
      setError(false);
      storage.set(AUTH_STORAGE_KEY, true);
    } catch (err) {
      setError('Oops, invalid username or password!');
    }
  };
  const login = useCallback((u, p) => {
    loginProcess(u, p);
  }, []);
  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.set(AUTH_STORAGE_KEY, false);
  }, []);
  return (
    <AuthContext.Provider value={{ login, logout, authenticated, error }}>
      {children}
    </AuthContext.Provider>
  );
}
export { useAuth };
export default AuthProvider;