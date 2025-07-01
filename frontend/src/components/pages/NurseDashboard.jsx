import React from 'react';
import Sidebar from "../ui/SideBar";
import {
	Box,
	Container,
} from "@mui/material";
import Calender from '../ui/NurseDashboard/Calender';
import Patient from '../ui/NurseDashboard/Patient';
import Events from '../ui/NurseDashboard/Events';
import Statistics from '../ui/NurseDashboard/Statistics';

const NurseDashboard = () => {
	return (
		<>
			<Sidebar isUser='Nurse' />
			<Container
				sx={{
					display: "flex",
					justifyContent: "space-between",
					flexDirection: "column",
					gap: 5,
				}}
			>
				<Calender></Calender>
				<Patient></Patient>
				<Events></Events>
				<Statistics></Statistics>
			</Container>
		</>
	);
};

export default NurseDashboard;
