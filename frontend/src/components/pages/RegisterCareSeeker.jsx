import { Box, FormHelperText, TextField } from '@mui/material'; // Added TextField for potentially better date input control
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';
import Input from '@mui/material/Input'; // Keep for file, but TextField might be better for text fields
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';

const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.dark,
    fontWeight: 'bold',
    padding: theme.spacing(1.5, 4),
    borderRadius: 12,
    boxShadow: theme.shadows[2],
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.common.white,
    },
}));

function RegisterCareSeeker() {

    const navigate = useNavigate();

    function handleRedirect(url) {
        navigate(url);
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start', // Changed to flex-start for scrollability
            alignItems: 'center', // Center items horizontally
            minHeight: '100vh', // Ensure it takes at least full viewport height
            height: 'max-content', // Allow content to expand
            backgroundColor: (theme) => theme.palette.primary.dark,
            overflowY: 'auto', // Allow vertical scrolling for the whole page
            py: 2, // Add some vertical padding
        }}>
            <Stack sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                my: 2, // Reduced margin
                gap: 2,
                padding: 1, // Reduced padding
            }}>
                <CustomButton onClick={() => handleRedirect("/register/nurse")}>Nurse</CustomButton>
                <CustomButton onClick={() => handleRedirect("/register/careseeker")}>Patient</CustomButton>
            </Stack>
            <Paper elevation={3}
                component="form" // Make Paper a form
                sx={{
                    backgroundColor: (theme) => theme.palette.background.paper,
                    mx: 'auto', // Center paper
                    padding: { xs: 2, sm: 3, md: 4 }, // Responsive padding
                    width: {
                        xs: '95%', // More width on extra small screens
                        sm: '90%',
                        md: '80%', // Adjust for medium screens
                        lg: '70%', // Max width for large screens, e.g., 1200px
                        xl: 1000, // Max width for very large screens
                    },
                    maxWidth: 1000, // Absolute max width
                    // height: 'auto', // Auto height based on content
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2, // Add gap between direct children of Paper
                }}>

            </Paper>
        </Box>
    );
};

export default RegisterCareSeeker;
