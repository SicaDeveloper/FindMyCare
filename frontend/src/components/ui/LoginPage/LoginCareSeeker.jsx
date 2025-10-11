import React from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { StyledInput, StyledInputLabel, StyledButton, StyledIconImage } from '../../utils/theme';
import { useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom';
import googleIcon from '../../../media/icons8-google-48.png';
import instagramIcon from '../../../media/icons8-instagram-48-2.png';
import linkedinIcon from '../../../media/icons8-linkedin-48.png';
import { useState } from 'react';

function LoginCareSeeker() {

    const [email, setEmailState] = useState("");
    const [password, setPasswordState] = useState("");
    const setErrorMessage = useOutletContext();

    async function sendLoginCredentials(email, password) {

        const data = {
            email: email,
            password: password,
        };

        if (!email || !password) {
            setErrorMessage("Email and password are required");
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorMessage("Invalid email format");
            return;
        }
        // Validate password length
        if (password.length < 6) {
            console.error("Password must be at least 6 characters long");
            return;
        }
        try {
            const response = await axios.post("http://localhost:3000/api/careseeker/login", data, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });
            if (response.data.token) {
                // Store token and role in localStorage
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('role', 'careseeker'); // Explicitly set role to 'careseeker'
                console.log('Login successful, token and role stored');
                console.log('Token:', response.data.token);
                console.log('Role:', 'careseeker');
                
                // Use window.location.replace for a complete page refresh
                window.location.replace("/user/dashboard");
            } else {
                setErrorMessage("Login failed: No authentication token received");
            }
            // Return the response data if needed
            console.log("Response from backend:", response.data);
        } catch (error) {
            // Improved error handling
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                setErrorMessage(`Login failed: ${error.response.data.message || 'Unknown error'}`);
            } else if (error.request) {
                // The request was made but no response was received
                setErrorMessage("Login failed: No response from server");
            } else {
                // Something happened in setting up the request that triggered an Error
                setErrorMessage(`Login error: ${error.message}`);
            }
        }
    };

    return (
        <Paper
            elevation={3}
            sx={{
                padding: 6,
                height: {
                    xs: 'max-content',
                    sm: 500,
                    md: 600,
                    lg: 650,
                },
                width: {
                    xs: '90%',
                    sm: 400,
                    md: 420,
                    lg: 480,
                },
                borderRadius: 8,
            }}
        >   <Box sx={{
            height: '80%',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            py: 2,
            px: 1,
        }}>
                <Stack sx={{
                    width: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    mb: 2,
                }} spacing={1}>
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            color: (theme) => theme.palette.primary.dark,
                            fontFamily: 'Lexend Deca, sans-serif',
                            mb: 0,
                            opacity: 0.7,
                        }} variant="h5" component="h1" align="left" gutterBottom>
                        Login
                    </Typography>
                    <Typography sx={{
                        fontFamily: 'Lexend Deca, sans-serif',
                        color: (theme) => theme.palette.text.secondary,
                        opacity: 0.8,
                        fontSize: '0.9rem',
                    }} variant='h6'>Don't have an account? <Link to="/register">Sign Up</Link></Typography>
                </Stack>
                <Stack>
                    <StyledInputLabel>Email</StyledInputLabel>
                    <StyledInput
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmailState(e.target.value)}
                        type="email"
                        fullWidth
                        required
                        sx={{ mb: 2 }} />
                </Stack>
                <Stack><StyledInputLabel>Password</StyledInputLabel>
                    <StyledInput
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPasswordState(e.target.value)}
                        type="password"
                        fullWidth
                        required
                        sx={{ mb: 4 }} /></Stack>
                <StyledButton onClick={() => sendLoginCredentials(email, password)}>Sign In</StyledButton>
                <Typography sx={{
                    mt: 2,
                    alignSelf: 'center',
                    fontFamily: 'Lexend Deca, sans-serif',
                    color: (theme) => theme.palette.text.secondary,
                    opacity: 0.8,
                    fontSize: '0.9rem',
                }} variant='h6'>Are you a Nurse? <Link to="/login/nurse">Login Here</Link></Typography>
            </Box>
            <hr />
            <Stack sx={{
                py: 4,
                px: 2,
                width: '100%',
            }} direction="row" spacing={6} justifyContent="center">
                <StyledIconImage src={googleIcon} alt="Google Icon" />
                <StyledIconImage src={instagramIcon} alt="Instagram Icon" />
                <StyledIconImage src={linkedinIcon} alt="LinkedIn Icon" />
            </Stack>
        </Paper>
    );
}

export default LoginCareSeeker;