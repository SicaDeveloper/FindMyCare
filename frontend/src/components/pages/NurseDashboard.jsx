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
import Appointments from '../ui/UserDashboard/Appointments';

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
				marginLeft: {
					xs: 0,
					sm: 6,
					md: 8,
					lg: 10,
				},

			}}>
				<Grid2 container direction={"column"} spacing={2}>
					<Grid2 container xs={12} md={8} lg={8}>
							<Grid2 xs={12} md={8} lg={8} mb={2}>
								<Statistics />
							</Grid2>
							<Grid2 xs={12} md={8} lg={8} mb={2}>
								<Calender />
							</Grid2>
					</Grid2>
					<Grid2 container xs={12} md={4} lg={3}>
						<Grid2 xs={12} md={4} lg={4} mb={2}>
							<Events />
						</Grid2>
						<Grid2 xs={12} md={4} lg={4} mb={2}>
							<Patient />
						</Grid2>
						<Grid2 xs={12} md={4} lg={4} mb={2}>
							<Appointments />
						</Grid2>
					</Grid2>
				</Grid2>
			</Paper>
		</Box>
	);
};

export default NurseDashboard;
