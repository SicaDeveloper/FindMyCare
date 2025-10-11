import React, { useState } from "react";
import {
    Box,
    Button,
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
                    padding: "8px",
                    backgroundColor: isToday ? "#e0f7fa" : "white",
                    borderRadius: "4px",
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
        <Paper elevation={3} sx={{ maxWidth: 350, mx:8, p: 4 }}>
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
            <Table>
                <TableHead>
                    <TableRow>
                        {daysOfWeek.map((day) => (
                            <TableCell key={day} sx={{ padding: "6px", color: "#00796b", textAlign: "center" }}>
                                {day}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>{rows}</TableBody>
            </Table>
        </Paper>
    );
}

export default Calender;