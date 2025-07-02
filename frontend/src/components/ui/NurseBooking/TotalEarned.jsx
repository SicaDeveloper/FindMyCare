import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const TotalEarned = ({ amount = 0, currency = 'USD' }) => {
    return (
        <Card sx={{ minWidth: 200 }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Total Earned
                </Typography>
                <Typography variant="h4" color="primary">
                    {currency === 'USD' ? '$' : ''}
                    {amount.toLocaleString()}
                    {currency !== 'USD' ? ` ${currency}` : ''}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default TotalEarned;