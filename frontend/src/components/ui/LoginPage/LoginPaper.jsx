import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const LoginPaper = ({ children }) => (
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bgcolor="#f5f5f5"
    >
        <Paper
            elevation={3}
            sx={{
                padding: 4,
                minWidth: 350,
                maxWidth: 400,
                width: '100%',
                borderRadius: 2,
            }}
        >
            <Typography variant="h5" component="h1" align="center" gutterBottom>
                Login
            </Typography>
            {children}
        </Paper>
    </Box>
);

export default LoginPaper;