
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
			<Grid container spacing={2}
				sx={{
					my: 12,
					mx: 12,
					display: "flex",
					justifyContent: "space-between",
					flexDirection: "column",
					gap: 5,
				}}
			>
				<Grid size={6}>
					<Calender />
				</Grid>
				<Grid size={3}>
					<Medication />
					<Appointments />
				</Grid>
			</Grid>
		</>
	);
};

export default UserDashboard;
