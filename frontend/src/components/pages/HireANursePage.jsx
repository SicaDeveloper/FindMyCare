import React from 'react';
import { Box, Paper, Stack, Typography, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Input } from '@mui/material';
import SideBar from '../ui/SideBar';
import BookNurse from '../ui/NurseBooking/BookNurse';

function HireANursePage() {
  return (<Paper sx={{
    backgroundColor: (theme) => theme.palette.primary.dark,
    height: "100vh",
    width: "100vw"
  }}>
    <Box sx={{
      paddingLeft: 14,
      paddingRight: 8,
      py: 4
    }}>
      <SideBar isUser='Nurse' />
      <Paper sx={{
        padding:4
      }}>
        <Stack>
          <Typography>Book your Nurse</Typography>
          <BookNurse />
          <Stack>
            <Typography>Reason for Booking</Typography>
            <Input required name="bookingReasonText" />
          </Stack>
          <Box>
            <Typography>Booking Date</Typography>
            <Input type="date" name="bookingDate" id="booking-date" required />
            <Typography>Time From</Typography>
            <Stack direction={'row'} gap={2}>
              <Input type="time" name="timeFrom" id="time-from" required />
              <Typography>to</Typography>
              <Input type="time" name="timeTo" id="time-to" required />
            </Stack>
          </Box>
          <Box>
            <FormControl required>
              <FormLabel>Reason for Booking</FormLabel>
              <RadioGroup row name="bookingReason" required>
                <FormControlLabel value="appointment" control={<Radio required />} label="Appointment" />
                <FormControlLabel value="followup" control={<Radio required />} label="Follow Up" />
                <FormControlLabel value="therapy" control={<Radio required />} label="Therapy" />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box>
            <FormControl required>
              <FormLabel>Option</FormLabel>
              <RadioGroup row name="bookingOption" required>
                <FormControlLabel value="homevisit" control={<Radio required />} label="Home Visit" />
                <FormControlLabel value="videocall" control={<Radio required />} label="Video Call" />
              </RadioGroup>
            </FormControl>
          </Box>
        </Stack>
        <Button variant="outlined">Book Meeting</Button>
      </Paper>
    </Box>
  </Paper>
  );
}

export default HireANursePage;
