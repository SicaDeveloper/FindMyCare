import React from 'react';
import Sidebar from "../ui/SideBar";
import {
	Box,
	Grid2,
	Paper,
	Stack
} from "@mui/material";
import Calender from '../ui/NurseDashboard/Calender';
import Patient from '../ui/NurseDashboard/Patient';
import Events from '../ui/NurseDashboard/Events';
import Statistics from '../ui/NurseDashboard/Statistics';

const NurseDashboard = () => {
	return (
		<Box sx={{
			backgroundColor: (theme) => theme.palette.primary.dark,
			minHeight: "100vh",
			height: "fit-content",
			width: "100%",
			padding: 4,
		}}>
			<Sidebar isUser='Nurse' />
			<Paper sx={{
				backgroundColor: (theme) => theme.palette.background.paper,
				padding: 4,
				marginLeft: 8,

			}}>
				<Grid2 container spacing={2}>
					<Statistics></Statistics>
					<Calender></Calender>
					<Patient></Patient>
					<Events></Events>
				</Grid2>
			</Paper>
		</Box>
	);
};

export default NurseDashboard;
