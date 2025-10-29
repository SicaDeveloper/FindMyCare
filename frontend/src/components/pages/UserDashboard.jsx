
import {
	Box,
	Container,
} from "@mui/material";
import Sidebar from "../ui/SideBar";
import Appointments from "../ui/UserDashboard/Appointments";
import Calender from "../ui/UserDashboard/Calender";
import Medication from "../ui/UserDashboard/Medication";


const UserDashboard = () => {
	return (
		<>
			<Sidebar isUser='User' />
			<Container
				sx={{
					my: 12,
					mx: 12,
					display: "flex",
					justifyContent: "space-between",
					flexDirection: "column",
					gap: 5,
				}}
			>
				<Box sx={{ display: "flex", gap: 5, width: "100%", justifyContent: "space-between" }}>
					<Calender />
					<Medication />
				</Box>
				<Appointments />
			</Container>
		</>
	);
};

export default UserDashboard;
