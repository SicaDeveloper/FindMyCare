// context/AuthContext.js

import React, { createContext, useContext } from 'react';
import { useAuth } from '../hooks/useAuth';

const AuthContext = createContext();

// 1. Rename to 'AuthProvider' (or similar) and use 'export default'
const AuthProvider = ({ children }) => {
    const auth = useAuth(); // Assume useAuth() is the state/logic hook

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider; // <-- Default Export the Provider

// 2. Keep the hook as a named export
export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuthContext must be used within an AuthProvider');
    }
    return context;
};