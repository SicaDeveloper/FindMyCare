import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { StyledInput, StyledInputLabel, StyledButton, StyledImage} from '../../utils/theme';
import { Link } from 'react-router-dom';
import googleIcon from '../../../media/icons8-google-48.png';
import instagramIcon from '../../../media/icons8-instagram-48-2.png';
import linkedinIcon from '../../../media/icons8-linkedin-48.png';
import { useState } from 'react';


function sendRegisterRequest(email, password) {
    
}

function checkPasswordMatch(password, retypePassword) {
    return password === retypePassword;
}

function RegisterPaper({ children }) {

  const [email, setEmailState] = useState("");
  const [password, setPasswordState] = useState("");
  const [retypePassword, setRetypePasswordState] = useState("");

    return (
        <Paper elevation={3}
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
            }}>
            <Box sx={{
                height: '80%',
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
                    }} variant='h6'>Already Have an Account? <Link to="/login">Sign In</Link></Typography>
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
                <StyledButton>Sign Up</StyledButton>
            </Box>
            <hr />
            <Stack sx={{
                py: 4,
                px: 2,
                width: '100%',
            }} direction="row" spacing={6} justifyContent="center">
                <StyledImage src={googleIcon} alt="Google Icon" />
                <StyledImage src={instagramIcon} alt="Instagram Icon" />
                <StyledImage src={linkedinIcon} alt="LinkedIn Icon" />
            </Stack>
        </Paper>
    );
}

export default RegisterPaper;