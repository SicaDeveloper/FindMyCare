import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const logout = async () => {
            try {
                await axios.post("http://localhost:3000/api/auth/logout", {}, {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                console.log("Logout successful on server");
            } catch (error) {
                console.error("Error during server logout:", error);
            } finally {
                // Optionally, clear any frontend state (e.g., context, redux, localStorage) here
                // Then redirect to home
                navigate("/");
            }
        };

        logout();
    }, [navigate]);

    // You can return a loading message or nothing until the redirect happens
    return <div>Logging out...</div>;
};

export default Logout;