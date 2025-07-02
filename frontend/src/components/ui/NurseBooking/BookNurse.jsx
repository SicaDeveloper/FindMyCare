import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import ReviewsIcon from '@mui/icons-material/Reviews';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { styled } from '@mui/material/styles';


const SquareImage = styled('img')({
    width: '120px',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '16px',
    display: 'block',
});

const NursePaper = ({ nurse, children }) => (
    <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <Stack direction="row" gap={4}>
            <SquareImage src={nurse?.image || ''} />
            <Box>
                <Typography variant="h6">{nurse?.name || 'Nurse Name'}</Typography>
                <Stack direction="row" gap={6} py={1}>
                    <Typography>{nurse?.specialty || 'Specialty'}</Typography>
                    <Typography>
                        <LocationOnIcon fontSize="small" sx={{ verticalAlign: 'middle' }} />
                        {nurse?.distance ? `${nurse.distance}km` : 'Distance'}
                    </Typography>
                </Stack>
                <Typography>
                    <Rating value={nurse?.rating || 0} readOnly size="small" />
                    <ReviewsIcon fontSize="small" sx={{ verticalAlign: 'middle', ml: 1 }} />
                </Typography>
                {children}
            </Box>
        </Stack>
    </Paper>
);

export default NursePaper;