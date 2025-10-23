import React, { useState } from "react";
import {
    Box,
    Stack,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
    Paper
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function Calender() {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [currentHour, setCurrentHour] = useState(today.getHours());
    const [currentMinute, setCurrentMinute] = useState(today.getMinutes() ? today.getMinutes().toString().padStart(2, '0') : '00');
    

    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();

    const prevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear((y) => y - 1);
        } else {
            setCurrentMonth((prev) => prev - 1);
        }
    };

    const nextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear((y) => y + 1);
        } else {
            setCurrentMonth((prev) => prev + 1);
        }
    };

    // Generate calendar grid
    const calendarDays = [];
    for (let i = 0; i < firstDay; i++) {
        calendarDays.push(<TableCell key={`empty-${i}`} />);
    }
    for (let d = 1; d <= daysInMonth; d++) {
        const isToday =
            d === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear();
        calendarDays.push(
            <TableCell
                key={d}
                sx={{
                    padding: "16px",
                    backgroundColor: isToday ? "#e0f7fa" : "white",
                    cursor: "pointer",
                    textAlign: "center",
                }}
            >
                {d}
            </TableCell>
        );
    }

    // Split into weeks
    const rows = [];
    for (let i = 0; i < calendarDays.length; i += 7) {
        rows.push(<TableRow key={i}>{calendarDays.slice(i, i + 7)}</TableRow>);
    }

    const monthName = new Date(currentYear, currentMonth).toLocaleString("default", { month: "long" });

    return (
        <Paper elevation={2} sx={{ maxWidth: 400, mx: 4, p: 2, bgcolor: (theme) => theme.palette.background.default, borderRadius: 5 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2} px={1}>
                <Stack direction="column">
                    <Typography variant="h6">Bookings</Typography>
                    <Typography variant="body">10 mins to next shift</Typography>
                </Stack>
                <Box sx={{
                    backgroundColor: (theme) => theme.palette.background.paper,
                    padding: 1,
                    border: "1px solid lightgrey",
                    borderRadius: 2,
                    color: (theme) => theme.palette.primary.text,
                }}>
                    <Typography variant="h5">{currentHour}:{currentMinute}</Typography>
                </Box>
            </Stack>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <IconButton onClick={prevMonth} size="small">
                    <ArrowBackIos fontSize="small" />
                </IconButton>
                <Typography variant="h6" fontWeight="bold">
                    {monthName} {currentYear}
                </Typography>
                <IconButton onClick={nextMonth} size="small">
                    <ArrowForwardIos fontSize="small" />
                </IconButton>
            </Box>
            <Paper sx={{ p: 2, border:"1px solid grey 0.1", borderRadius: 10, backgroundColor: "#ffffff" }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {daysOfWeek.map((day) => (
                                <TableCell key={day} sx={{ padding: "8px", color: "#00796b", textAlign: "center" }}>
                                    {day}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{
                        '& .MuiTableCell-root': {
                            borderBottom: 'none'
                        },
                        '& .MuiTableRow-root': {
                            borderBottom: 'none'
                        }
                    }}>{rows}</TableBody>
                </Table>
            </Paper>
        </Paper>
    );
}

export default Calender;