import React from 'react';
import { Box, Paper } from '@mui/material';
import Sidebar from "../ui/SideBar";


function PatientPage() {

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
			</Paper>
		</Box>
  );
}

export default PatientPage;