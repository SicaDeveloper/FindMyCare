
import Sidebar from "../ui/SideBar";
import Appointments from "../ui/UserDashboard/Appointments";
import Calender from "../ui/UserDashboard/Calender";
import Medication from "../ui/UserDashboard/Medication";
import { Grid2 } from "@mui/material";

const UserDashboard = () => {
	return (
		<>
			<Sidebar isUser='User' />
			<Grid2 container spacing={2}
				sx={{
					my: 12,
					mx: 12,
					display: "flex",
					justifyContent: "space-between",
					flexDirection: "column",
					gap: 5,
				}}
			>
				<Grid2 size={6}>
					<Calender />
				</Grid2>
				<Grid2 size={3}>
					<Medication />
					<Appointments />
				</Grid2>
			</Grid2>
		</>
	);
};

export default UserDashboard;
