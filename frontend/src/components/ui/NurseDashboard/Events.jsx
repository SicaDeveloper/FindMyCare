import React from 'react';
import { Card, CardContent, Typography, Box, Stack } from '@mui/material';

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
    <Card sx={{ mb: 2, background: '#fafafa' }}>
        <CardContent>
            <Typography variant="h6" gutterBottom>
                {event.title}
            </Typography>
            <Stack spacing={0.5}>
                <Typography variant="body2"><strong>Date:</strong> {event.date}</Typography>
                <Typography variant="body2"><strong>Time:</strong> {event.time}</Typography>
                <Typography variant="body2"><strong>Location:</strong> {event.location}</Typography>
                <Typography variant="body2">{event.description}</Typography>
            </Stack>
        </CardContent>
    </Card>
);

const Events = () => (
    <Box>
        <Typography variant="h5" gutterBottom>
            Upcoming Events
        </Typography>
        {events.length === 0 ? (
            <Typography>No events scheduled.</Typography>
        ) : (
            events.map(event => <EventCard key={event.id} event={event} />)
        )}
    </Box>
);

export default Events;