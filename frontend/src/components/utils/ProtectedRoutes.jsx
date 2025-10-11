// components/ProtectedRoute.js
import { useAuthContext } from '../../context/AuthContext.jsx';
import { Navigate, useLocation } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';


const ProtectedRoute = ({
    children,
    requiredRole = null,
    fallbackPath = '/login/careseeker'
}) => {
    
    const { isAuthenticated, user, loading } = useAuthContext();
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <CircularProgress />
            </div>
        );
    }

    if (!isAuthenticated) {
        // Redirect to login with return URL
        return <Navigate to={fallbackPath} state={{ from: location }} replace />;
    }

    if (requiredRole && user?.role !== requiredRole) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
};

export default ProtectedRoute;