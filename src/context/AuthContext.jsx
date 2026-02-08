import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// Mock users database
const MOCK_USERS = [
  {
    id: 1,
    name: 'John User',
    email: 'user@example.com',
    password: 'password123',
    role: 'user'
  },
  {
    id: 2,
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'admin123',
    role: 'admin'
  },
  {
    id: 3,
    name: 'Test Customer',
    email: 'customer@example.com',
    password: 'test123',
    role: 'user'
  }
];

// Mock token generator
const generateMockToken = (email) => {
  return `mock_token_${email}_${Date.now()}`;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    // Check if user is logged in on app start
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      console.log('🔐 Login attempt:', email);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));

      // Find user in mock database
      const foundUser = MOCK_USERS.find(u => u.email === email && u.password === password);

      if (foundUser) {
        console.log('✅ User found:', foundUser.email);
        const mockToken = generateMockToken(email);
        const userData = {
          id: foundUser.id,
          name: foundUser.name,
          email: foundUser.email,
          role: foundUser.role
        };

        setUser(userData);
        setToken(mockToken);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('token', mockToken);
        
        console.log('✅ Login successful, userData:', userData);
        return { 
          success: true, 
          message: `Welcome back, ${foundUser.name}!`,
          data: { user: userData, token: mockToken }
        };
      } else {
        console.log('❌ Invalid credentials');
        return { 
          success: false, 
          message: 'Invalid email or password' 
        };
      }
    } catch (error) {
      console.error('❌ Login error:', error);
      return { 
        success: false, 
        message: 'Login failed. Please try again.' 
      };
    }
  };

  const signup = async (name, email, password, role) => {
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check if user already exists
      const userExists = MOCK_USERS.some(u => u.email === email);
      if (userExists) {
        return { 
          success: false, 
          message: 'Email already registered' 
        };
      }

      // Create new mock user
      const newUser = {
        id: MOCK_USERS.length + 1,
        name,
        email,
        password,
        role: role || 'user'
      };

      // Add to mock database (in memory only)
      MOCK_USERS.push(newUser);

      const mockToken = generateMockToken(email);
      const userData = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
      };

      setUser(userData);
      setToken(mockToken);
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', mockToken);

      return { 
        success: true, 
        message: 'Signup successful!',
        data: { user: userData, token: mockToken }
      };
    } catch (error) {
      return { 
        success: false, 
        message: 'Signup failed. Please try again.' 
      };
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  const value = {
    user,
    token,
    loading,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 