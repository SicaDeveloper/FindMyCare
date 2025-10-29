import { Box, Stack } from "@mui/system";
import theme from "../utils/theme.jsx";
import LoginNurse from "../ui/LoginPage/LoginNurse.jsx";
import SideImage from "../ui/SideImage.jsx";
import { useLocation } from "react-router-dom";
import LoginCareSeeker from "../ui/LoginPage/LoginCareSeeker.jsx";
import { useAuth } from "../../hooks/useAuth.js";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginUser() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, loading, user } = useAuth(); 

  // Core Redirection Logic (Public-Only Guard)
  useEffect(() => {
    if (!loading && isAuthenticated) {
        // Based on user role, navigate to the appropriate dashboard
        const dashboardPath = user?.role === 'nurse' 
            ? '/nurse/dashboard' 
            : user?.role === 'careseeker'
            ? '/careseeker/dashboard'
            : '/'; // Default path
        
        console.log(`User authenticated (${user?.role}). Redirecting to: ${dashboardPath}`);
        navigate(dashboardPath, { replace: true });
    }
  }, [loading, isAuthenticated, user, navigate]);

  // 1. Show Loading Spinner while the cookie is being verified
  if (loading) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress />
        </Box>
    );
  }
  
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        padding: 10,
        bgcolor: theme.palette.primary.dark,
      }}
    >
      <Stack
        sx={{
          width: "100%",
          height: "100%",
          gap: 24,
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          alignItems: "center",
        }}
      >
        <SideImage />
        {location.pathname === "/login/nurse" ? (
          <LoginNurse />
        ) : location.pathname === "/login/careseeker" ? (
          <LoginCareSeeker />
        ) : null}
      </Stack>
    </Box>
  );
}

export default LoginUser;
