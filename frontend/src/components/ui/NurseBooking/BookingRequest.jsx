
import { Paper, Stack, Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import { StyledInput, StyledInputLabel, StyledPatientImage } from "../../utils/theme";
import pfp from "../../../media/nurse-pfp.webp"; // Assuming you have a patient image

function BookingRequest() {

    const bookingData = [
        {
            id: 1,
            title: "Morning Shift",
            date: "2024-06-10",
            startingTime: "08:00",
            endingTime: "12:00",
            gender: "Female",
            age: 32,
            reason: "Post-surgery care",
            type: "Home Visit"
        },
        {
            id: 2,
            title: "Afternoon Shift",
            date: "2024-06-10",
            startingTime: "13:00",
            endingTime: "17:00",
            gender: "Male",
            age: 22,
            reason: "Post-surgery care",
            type: "Home Visit"
        }
    ];

    const [date, setDate] = useState(bookingData[0].date);
    const [time, setTime] = useState(bookingData[0].startingTime);

    return (
        <Stack sx={{
            overflowY: "scroll",
            "&::-webkit-scrollbar": { display: "none" },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
        }} gap={4} overflow={"auto"} width="fit-content" maxHeight={900} >
            {bookingData.map((booking) => (
                <Paper key={booking.id} elevation={3} sx={{
                    width: {
                        xs: "fitcontent",
                        md: "80vw", lg: "fit-content"
                    }, px: 4, py: 2
                }}>
                    <Stack width="100%" padding={2} gap={{
                        md: 2, lg: 4
                    }} justifyContent={"center"} direction={
                        {
                            xs: "column", md: "row"
                        }
                    }>
                        <Stack width="100%" justifyContent={"center"}>
                            <Typography variant='h5' py={2}>{booking.title}</Typography>
                            <StyledInputLabel>Date</StyledInputLabel>
                            <StyledInput type="date" name="startingDate" value={booking.date} required disabled />
                            <StyledInputLabel>Time</StyledInputLabel>
                            <Stack direction="row" justifyContent={"center"} alignItems={"baseline"} gap={2}>
                                <StyledInput type="time" name="startingTime" value={booking.startingTime} required disabled />
                                <Typography>to</Typography>
                                <StyledInput type="time" name="endingTime" value={booking.endingTime} required disabled />
                            </Stack>
                        </Stack>
                        <Box>
                            <Paper sx={{
                                border: "1px solid ",
                                width: 325,
                                height: 350,
                                padding: 2,
                                display: "flex",
                                flexDirection: "column",
                                gap: 4,
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <StyledPatientImage src={pfp}></StyledPatientImage>
                                <Stack gap={1} direction={"column"} marginBottom={2}>
                                    <Typography variant="h7">{booking.gender} - {booking.age}</Typography>
                                    <Stack gap={6} direction={"row"}>
                                        <Typography>{booking.reason}</Typography>
                                        <Typography>{booking.type}</Typography>
                                    </Stack>
                                </Stack>
                            </Paper>
                        </Box>
                    </Stack>
                    <Stack direction={"row"} gap={2} justifyContent={"flex-end"} sx={{ mt: 3 }}>
                        <Button variant="contained" color="primary">
                            Cancel Booking
                        </Button>
                        <Button variant="contained" color="primary">
                            Confirm Booking
                        </Button>
                    </Stack>
                </Paper>
            ))}
        </Stack>
    );
}

export default BookingRequest;