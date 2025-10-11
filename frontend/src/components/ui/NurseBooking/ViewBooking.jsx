import React from 'react';
import { Box, Paper, Typography, Button, Input, Stack } from '@mui/material';
import BookingRequest from './BookingRequest';

function ViewBooking() {
    return (
        <>
        <Typography color='white' variant="h2">View Bookings</Typography>
        <BookingRequest></BookingRequest>
        </>
    );
}

export default ViewBooking;