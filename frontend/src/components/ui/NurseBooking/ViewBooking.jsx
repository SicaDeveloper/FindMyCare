import React from 'react';
import { Box, Paper, Typography, Button } from '@mui/material';

const ViewBooking = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Booking Details
                </Typography>
                {/* Replace with actual booking details */}
                <Typography variant="body1">
                    Patient Name: John Doe
                </Typography>
                <Typography variant="body1">
                    Date: 2024-06-10
                </Typography>
                <Typography variant="body1">
                    Time: 10:00 AM
                </Typography>
                <Box sx={{ mt: 3 }}>
                    <Button variant="contained" color="primary">
                        Confirm Booking
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default ViewBooking;