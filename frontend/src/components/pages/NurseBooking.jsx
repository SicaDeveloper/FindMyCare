
import SideBar from '../ui/SideBar';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Stack, Typography,RadioGroup,FormControl,FormLabel, FormControlLabel, Radio, Button } from '@mui/material';
import ViewBooking from '../ui/NurseBooking/ViewBooking';

function NurseBooking() {
    return (
        <>
        <SideBar isUser='Nurse' />
        <Paper sx={{
            backgroundColor:(theme) => theme.palette.primary.dark,
            height : {xs:"fit-content", sm: "100vh"},
            paddingLeft : 16,
            py : 4,
            width : "100%",
        }}>
            <ViewBooking/>
        </Paper>
        </>
    );
}

export default NurseBooking;