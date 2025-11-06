import React from 'react';
import { Typography, Paper, Stack, Button, Box } from '@mui/material';
import theme from '../../utils/theme';

const events = [
    {
        id: 1,
        title: 'Patient Checkup',
        date: '2024-06-15',
        time: '10:00 AM',
        location: 'Room 101',
        description: 'Routine checkup for patient John Doe.',
    },
    {
        id: 2,
        title: 'Medication Round',
        date: '2024-06-15',
        time: '12:00 PM',
        location: 'Ward B',
        description: 'Administer medications to patients in Ward B.',
    },
    {
        id: 3,
        title: 'Team Meeting',
        date: '2024-06-16',
        time: '09:00 AM',
        location: 'Conference Room',
        description: 'Weekly team meeting to discuss patient care.',
    },
];

const EventCard = ({ event }) => (
    <Box sx={{
        display:'flex',
        gap: 4,
        justifyContent: 'space-between',
        px:2, py:2
    }}>
        <Stack sx={{
            gap:1
        }}>
            <Typography>{event.time}</Typography>
            <Typography>{event.title}</Typography>
        </Stack>
        <Button variant='contained' sx={{
            bgcolor: theme.palette.grey[900],
            borderRadius : 3
        }} >Start Shift</Button>
    </Box>
);

const Events = () => (
    <Paper elevation={1} sx={{
        px:5, py: 4, borderRadius: 8, bgcolor:"white"
    }}>
        <Typography variant="h6" gutterBottom>
            Upcoming Events
        </Typography>
        {events.length === 0 ? (
            <Typography>No events scheduled.</Typography>
        ) : (
            events.map(event => <EventCard key={event.id} event={event} />)
        )}
    </Paper>
);

export default Events;