import { Box, Stack, Typography, Divider, Button } from "@mui/material";
import Paper from '@mui/material/Paper';


const Appointments = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Upcoming Appointments
      </Typography>
      <Divider />
      <Stack gap={2} mt={2}>
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <Button variant="outlined">View All</Button>
      </Stack>
    </Box>
  );
};

const AppointmentCard = () => {
  return (
    <Paper elevation={3}>
      <Stack p={2} gap={1}>
        <Typography variant="body1">Date: 22/02/2024</Typography>
        <Typography variant="body1">Time: 10:00 AM</Typography>
        <Typography variant="body1">Nurse: John Doe</Typography>
      </Stack>
    </Paper>
  );
};

export default Appointments;
