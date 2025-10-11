import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const UpcomingBooking = ({ booking, onCancel }) => {
    if (!booking) {
        return (
            <Box sx={{
                backgroundColor: "white",
                maxWidth: 400,
                borderRadius: 2,
                padding: 2,
                boxShadow: 3,
                margin: 'auto',
                mt: 4,

            }} display="flex" justifyContent="center" alignItems="center" minHeight={200}>
                <Typography variant="h6" color="textSecondary">
                    No upcoming bookings.
                </Typography>
            </Box>
        );
    }

    return (
        <Card sx={{ backgroundColor: "white", maxWidth: 250, margin: 'auto', mt: 4 }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Upcoming Booking
                </Typography>
                <Typography variant="body1">
                    <strong>Date:</strong> {booking.date}
                </Typography>
                <Typography variant="body1">
                    <strong>Time:</strong> {booking.time}
                </Typography>
                <Typography variant="body1">
                    <strong>Nurse:</strong> {booking.nurseName}
                </Typography>
                <Box mt={2}>
                    <Button variant="contained" color="error" onClick={() => onCancel(booking.id)}>
                        Cancel Booking
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default UpcomingBooking;