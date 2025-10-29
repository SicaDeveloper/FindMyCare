import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App.jsx';
import Home from './components/pages/Home.jsx';
import ProtectedRoute from './components/utils/ProtectedRoutes.jsx';
import UserDashboard from './components/pages/UserDashboard.jsx';
import UserLogin from './components/pages/LoginUser.jsx';
import RegisterUser from './components/pages/RegisterUser.jsx';
import RegisterNurse from './components/ui/RegisterUser/RegisterNurse.jsx';
import RegisterCareSeeker from './components/ui/RegisterUser/RegisterCareSeeker.jsx';
import NurseDashboard from './components/pages/NurseDashboard.jsx';
import NurseBooking from './components/pages/NurseBooking.jsx';
import HireANursePage from './components/pages/HireANursePage.jsx';
import MessagePage from './components/pages/MessagePage.jsx';
import PatientPage from './components/pages/PatientPage.jsx';
import ReportPage from './components/pages/ReportPage.jsx';
import Logout from './components/utils/Logout.jsx';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />

                    {/* CareSeeker Routes */}
                    <Route path="/user/dashboard" element={<UserDashboard />} />
                    <Route path="/user/booking" element={<HireANursePage />} />

                    {/* Nurse Routes */}
                    <Route path="/nurse/dashboard" element={
                        <ProtectedRoute requiredRole="nurse">
                            <NurseDashboard />
                        </ProtectedRoute>
                    } />
                    <Route path="/nurse/booking" element={<NurseBooking />} />

                    {/* Authentication Routes */}
                    <Route path="/login/careseeker" element={<UserLogin />} />
                    <Route path="/login/nurse" element={<UserLogin />} />
                    {/* Registration Routes */}
                    <Route path="/register" element={<RegisterUser />} />
                    <Route path="/register/nurse" element={<RegisterNurse />} />
                    <Route path="/register/careseeker" element={<RegisterCareSeeker />} />
                    <Route path="/nurse/messages" element={
                        <ProtectedRoute requiredRole="nurse">
                            <MessagePage />
                        </ProtectedRoute>
                    } />
                    <Route path="/nurse/patients" element={
                        <ProtectedRoute requiredRole="nurse">
                            <PatientPage />
                        </ProtectedRoute>
                    } />
                    <Route path="/nurse/reports" element={
                        <ProtectedRoute requiredRole="nurse">
                            <ReportPage />
                        </ProtectedRoute>
                    } />
                    <Route path="/logout" element={<Logout />} />
                    {/* Fallback Route */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default AppRoutes;
