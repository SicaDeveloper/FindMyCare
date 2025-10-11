import React from 'react';
import { Card, CardContent, Typography, Grid2, Box } from '@mui/material';

const stats = [
    { label: 'Patients Today', value: 0 },
    { label: 'Appointments', value: 0 },
    { label: 'Tasks Completed', value: 0 },
];

const Statistics = () => (
    <Box sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
            Nurse Dashboard Statistics
        </Typography>
        <Grid2 container spacing={2}>
            {stats.map((stat) => (
                <Grid2 item xs={12} sm={4} key={stat.label}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                                {stat.label}
                            </Typography>
                            <Typography variant="h4">{stat.value}</Typography>
                        </CardContent>
                    </Card>
                </Grid2>
            ))}
        </Grid2>
    </Box>
);

export default Statistics;