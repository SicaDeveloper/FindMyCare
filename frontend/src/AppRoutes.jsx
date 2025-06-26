import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App.jsx';
import Home from './components/pages/Home.jsx';
import UserDashboard from './components/pages/UserDashboard.jsx';
import UserLogin from './components/pages/UserLogin.jsx';
import RegisterUser from './components/pages/RegisterUser.jsx';
import RegisterNurse from './components/pages/RegisterNurse.jsx';
import RegisterCareSeeker from './components/pages/RegisterCareSeeker.jsx';
import IsLoggedIn from '../../backend/util/IsLoggedIn.js';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={IsLoggedIn() ? <Navigate to="/dashboard" /> : <Home />} />
                    <Route path="dashboard" element={<UserDashboard />} />
                    <Route path="login" element={<UserLogin />} />
                    <Route path="register" element={<RegisterUser />} />
                    <Route path="register/nurse" element={<RegisterNurse />} />
                    <Route path="register/careseeker" element={<RegisterCareSeeker />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default AppRoutes;
