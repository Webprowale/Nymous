import { createContext, useContext, useState, useEffect } from 'react';
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userDetails = localStorage.getItem('details');
    if (userDetails) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (user) => {
    localStorage.setItem('details', JSON.stringify(user));
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('details');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
