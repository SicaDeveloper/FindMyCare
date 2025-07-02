
import SideBar from '../ui/SideBar';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Stack, Typography,RadioGroup,FormControl,FormLabel, FormControlLabel, Radio, Button } from '@mui/material';

function NurseBooking() {
    return (
        <>
        <SideBar isUser='Nurse' />
        <Paper sx={{
            backgroundColor:(theme) => theme.palette.primary.dark,
            height : "100vh",
            width : "100vw"
        }}>
            
        </Paper>
        </>
    );
}

export default NurseBooking;