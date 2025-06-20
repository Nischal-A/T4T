
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, users } from '@/data/users';

interface AuthContextType {
  currentUser: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
  switchUser: (userId: string) => void;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userDatabase, setUserDatabase] = useState<User[]>(users);

  useEffect(() => {
    const savedUserId = localStorage.getItem('currentUserId');
    const savedUsers = localStorage.getItem('userDatabase');
    
    if (savedUsers) {
      const parsedUsers = JSON.parse(savedUsers);
      setUserDatabase(parsedUsers);
      
      if (savedUserId) {
        const user = parsedUsers.find((u: User) => u.id === savedUserId);
        if (user) {
          setCurrentUser(user);
        }
      }
    }
  }, []);

  const login = (username: string, password: string): boolean => {
    const user = userDatabase.find(u => u.username === username && u.password === password);
    if (user) {
      setCurrentUser(user);
      localStorage.setItem('currentUserId', user.id);
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUserId');
    localStorage.removeItem('isAuthenticated');
  };

  const updateUser = (updates: Partial<User>) => {
    if (!currentUser) return;

    const updatedUser = { ...currentUser, ...updates };
    const updatedDatabase = userDatabase.map(user => 
      user.id === currentUser.id ? updatedUser : user
    );
    
    setCurrentUser(updatedUser);
    setUserDatabase(updatedDatabase);
    localStorage.setItem('userDatabase', JSON.stringify(updatedDatabase));
  };

  const switchUser = (userId: string) => {
    const user = userDatabase.find(u => u.id === userId);
    if (user) {
      setCurrentUser(user);
      localStorage.setItem('currentUserId', user.id);
    }
  };

  const value: AuthContextType = {
    currentUser,
    login,
    logout,
    updateUser,
    switchUser,
    isAdmin: currentUser?.role === 'admin' || false
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
