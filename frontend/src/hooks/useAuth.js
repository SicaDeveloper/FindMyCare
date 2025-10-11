// hooks/useAuth.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check authentication status by calling backend
    // NOTE: This assumes you have imported the axios library globally or in this file:
// import axios from 'axios';

const checkAuth = async () => {
    try {
        const response = await axios.post('http://localhost:3000/api/auth/verify', {},{
            // The 'withCredentials: true' option in Axios is the equivalent 
            // of 'credentials: 'include'' in the standard fetch API.
            withCredentials: true 
        });

        // Backend returns { valid, decoded }
        const { valid, decoded } = response.data;
        setUser(decoded);
        setIsAuthenticated(Boolean(valid));

        console.log(user?.role);
        
    } catch (error) {
        // Axios error handling:
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            // Handle specific authentication failure codes (e.g., 401 Unauthorized)
            console.log('Token invalid or missing. Setting state to logged out.');
        } else {
            // Handle network errors or other server errors
            console.error('Auth check failed:', error);
        }
        
        setUser(null);
        setIsAuthenticated(false);
        
    } finally {
        setLoading(false);
    }
};

    useEffect(() => {
        checkAuth();
    }, []);

    return {
        user,
        loading,
        isAuthenticated,
        checkAuth, // Export so components can manually re-check
        hasRole: (role) => user?.role === role
    };
};