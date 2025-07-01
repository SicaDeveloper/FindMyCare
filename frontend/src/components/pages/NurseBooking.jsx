
import SideBar from '../ui/SideBar';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ReviewsIcon from '@mui/icons-material/Reviews';
import Rating from '@mui/material/Rating';
import { Stack, Typography } from '@mui/material';


const SquareImage = styled('img')({
    width: '120px',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '16px',
    display: 'block',
});

function NurseBooking() {
    return (
        <>
            <SideBar isUser='Nurse' />
            <Box sx={{
                marginLeft: 12
            }}>
                <Paper>
                    <Stack>
                        <Typography>Book your Nurse</Typography>
                        <Paper>
                            <Stack sx={
                                {
                                    flexDirection:"row",
                                    gap:4
                                }
                            }>
                                <SquareImage src='' />
                                <Box>
                                    <Typography>Dr. Blank Hector</Typography>
                                    <Stack direction={{
                                        xs:'row',
                                        gap: 6,
                                        py:2
                                    }}>
                                        <Typography>Psychiatrist</Typography>
                                        <Typography><LocationOnIcon />16km</Typography>
                                    </Stack>
                                    <Typography><Rating /><ReviewsIcon /> </Typography>
                                </Box>
                            </Stack>
                        </Paper>
                        <Box>
                            <Typography>Booking Date</Typography>

                        </Box>
                        <Box>

                        </Box>
                    </Stack>
                </Paper>
            </Box>
        </>
    );
}

export default NurseBooking;