import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid2, Box, Paper, styled } from '@mui/material';
import { Stack, Button } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { StyledToggleButton } from '../../utils/theme';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// 3. Registering the components is crucial for Chart.js v3+
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const stats = [
    { label: 'Hours Worked', value: 120 },
    { label: 'Current Rating', value: 4.5 },
    { label: 'Current Rate', value: "100$" },
    { label: 'Shifts', value: 10 },
];

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top', // Position the legend at the top
        },
        title: {
            display: true,
            text: 'Payment', // Set the chart title
        },
    },
};

// Define the chart data outside the component
// This is your original 'data' prop data
const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
        {
            label: 'Earnings',
            data: [65, 59, 80, 81, 56, 55, 40, 200, 1000, 500, 700, 900],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            tension: 0.1, // Makes the line slightly curved
        },
    ],
};


// Define custom styles for the ToggleButton

function Statistics() {
    const [timeframe, setTimeframe] = useState('today');
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            setGreeting('Good Morning');
        }
        else if (currentHour < 18) {
            setGreeting('Good Afternoon');
        }
        else {
            setGreeting('Good Evening');
        }
    }, []);


    return (
        <Paper elevation={3} sx={{
            p: 3, height: {
                xs: 'max-content',
                sm: 400,
                md: 450,
                lg: 500,
            }, width: {
                xs: '100%',
                sm: '100%',
                md: '100%', 
                lg: '100%'
            }, maxWidth: "fit-content", mx: 'auto', bgcolor: (theme) => theme.palette.background.default, borderRadius: 5
        }}>
            <Stack direction={"row"} sx={{
                height:"100%"
            }} justifyContent="space-between" alignItems="baseline" spacing={12}>
                <Stack sx={{ pl: 1, height:"100%" }} spacing={8}>
                    <Typography variant='h5' fontWeight={700}>Raj Dangol, <Typography>{greeting}</Typography></Typography>
                    <Grid2 container spacing={3} sx={{ maxWidth: 350 }} >
                        {stats.map((stat, index) => (
                            <Grid2 key={index} size={6} padding={2}>
                                <Typography variant="h2" align="center" fontWeight={700}>
                                    {stat.value}
                                </Typography>
                                <Typography variant="body1" align="center" color="textSecondary">
                                    {stat.label}
                                </Typography>
                            </Grid2>
                        ))}
                    </Grid2>
                </Stack>
                <Stack spacing={3} alignItems="flex-end" >
                    <ToggleButtonGroup
                        value={timeframe}
                        exclusive
                        onChange={(e, newTimeframe) => setTimeframe(newTimeframe)}
                        aria-label="Timeframe"
                    >
                        <StyledToggleButton value="today" aria-label="today's graph">
                            TODAY
                        </StyledToggleButton>
                        <StyledToggleButton value="week" aria-label="week's graph">
                            WEEK
                        </StyledToggleButton>
                        <StyledToggleButton value="month" aria-label="month's graph">
                            MONTH
                        </StyledToggleButton>
                    </ToggleButtonGroup>
                    <Box sx={{ width: 700, height: 400 }}>
                        <Line
                            options={options}
                            data={data}
                        />
                    </Box>
                </Stack>
            </Stack>
        </Paper>
    );
}

export default Statistics;