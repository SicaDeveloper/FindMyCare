import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { StyledInput, StyledInputLabel, StyledButton, StyledIconImage } from '../../utils/theme';
import { Link, useNavigate } from 'react-router-dom';
import googleIcon from '../../../media/icons8-google-48.png';
import instagramIcon from '../../../media/icons8-instagram-48-2.png';
import linkedinIcon from '../../../media/icons8-linkedin-48.png';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function checkPasswordMatch(password, retypePassword) {
    return password === retypePassword;
}

function RegisterPaper() {

    const [email, setEmailState] = useState("");
    const [password, setPasswordState] = useState("");
    const [retypePassword, setRetypePasswordState] = useState("");
    const setErrorMessage = useOutletContext();
    const navigate = useNavigate();

    async function sendRegisterRequest(email, password, retypePassword, role) {

        // Check if passwords match
        if (!checkPasswordMatch(password, retypePassword)) {
            setErrorMessage("Passwords do not match");
            return;
        }

        const data = {
            email: email,
            password: password,
            retypePassword: retypePassword,
            role: role, // 'nurse' or 'careseeker'
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
            setErrorMessage("Password must be at least 6 characters long");
            return;
        }

        if (role !== "nurse" && role !== "careseeker") {
            setErrorMessage("Invalid role selected");
            return;
        }

        if (role === "nurse") {
            try {
                navigate('/register/nurse', { state: { email, password } });
            } catch (error) {
                setErrorMessage("Navigation error: " + error.message);
            }
        } else if (role === "careseeker") {
            try {
                navigate('/register/careseeker', { state: { email, password } });
            } catch (error) {
                setErrorMessage("Navigation error: " + error.message);
            }
        }
    }

    return (
        <Paper elevation={3}
            sx={{
                padding: 5,
                height: {
                    xs: 'max-content',
                    sm: 500,
                    md: 600,
                    lg: 700,
                },
                width: {
                    xs: '90%',
                    sm: 400,
                    md: 420,
                    lg: 480,
                },
                borderRadius: 8,
            }}>
            <Box sx={{
                height: '85%',
                display: 'flex',
                flexDirection: 'column',
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
                        Register
                    </Typography>
                    <Typography sx={{
                        fontFamily: 'Lexend Deca, sans-serif',
                        color: (theme) => theme.palette.text.secondary,
                        opacity: 0.8,
                        fontSize: '0.9rem',
                    }} variant='h6'>Already Have an Account? <Link to="/login/careseeker">Sign In</Link></Typography>
                </Stack>
                <StyledInputLabel>Enter your Email</StyledInputLabel>
                <StyledInput
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmailState(e.target.value)}
                    type="email"
                    fullWidth
                    required
                    sx={{ mb: 2 }} />
                <StyledInputLabel> Enter your Password</StyledInputLabel>
                <StyledInput
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPasswordState(e.target.value)}
                    type="password"
                    fullWidth
                    required
                    sx={{ mb: 2 }} />
                <StyledInputLabel>Retype your Password</StyledInputLabel>
                <StyledInput
                    placeholder="Password"
                    value={retypePassword}
                    onChange={(e) => setRetypePasswordState(e.target.value)}
                    type="password"
                    fullWidth
                    required
                    sx={{ mb: 2 }} />
                <Stack sx={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: 2,
                }} spacing={2}>
                    <StyledButton onClick={() => sendRegisterRequest(email, password, retypePassword, "nurse")}>Sign Up as a Nurse</StyledButton>
                    <StyledButton onClick={() => sendRegisterRequest(email, password, retypePassword, "careseeker")}>Sign Up as a Patient</StyledButton>
                </Stack>
            </Box>
            <hr />
            <Stack sx={{
                py: 2,
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

export default RegisterPaper;