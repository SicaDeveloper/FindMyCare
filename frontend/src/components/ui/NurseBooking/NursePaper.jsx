import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const NursePaper = ({ nurse, children }) => (
    <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Typography variant="h6">{nurse?.name || 'Nurse Name'}</Typography>
            <Typography variant="body2" color="text.secondary">
                {nurse?.specialty || 'Specialty'}
            </Typography>
            {children}
        </Box>
    </Paper>
);

export default NursePaper;