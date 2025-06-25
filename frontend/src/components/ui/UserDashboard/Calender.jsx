import React from "react";
import { Box, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";

const getCurrentDate = () => {
	const date = new Date();
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	return `${year}-${month}-${day}`;
};

const Calender = () => {
	return (
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DateCalendar
					slots={{
						
					}}
					sx={{
						margin: "0",
						borderRadius: "16px",
						padding: "0",
						border: "1px solid #ccc",
						gap: 2,
						width:"24rem",
						height:"30rem",
						maxHeight:"22rem",
						backgroundColor: "background.paper",
					}}
					referenceDate={dayjs(getCurrentDate())}
					views={["year", "month", "day"]}
					readOnly
				/>
			</LocalizationProvider>
	);
};

export default Calender;
