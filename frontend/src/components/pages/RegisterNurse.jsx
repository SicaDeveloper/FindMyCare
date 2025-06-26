import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';


function RegisterNurse() {

    const location = useLocation();
    const { email, password } = location.state || {};

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Paper elevation={3} sx={{ padding: 4, maxWidth: 1600, width: '100%' }}>
            </Paper>
        </Box>
    );
}

export default RegisterNurse;