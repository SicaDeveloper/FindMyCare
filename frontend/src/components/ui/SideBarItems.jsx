import { useNavigate, Link as RouterLink } from "react-router-dom";
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DescriptionIcon from "@mui/icons-material/Description";
import PropTypes from "prop-types";
import MessageIcon from '@mui/icons-material/Message';

import {
	ListItem,
	ListItemIcon,
	ListItemText,
	ListItemButton,
} from "@mui/material";
import theme from "../utils/theme";

const SideBarItems = (props) => {
	const navigate = useNavigate();
	const adminSidebarItems = [
		{
			id: 1,
			icon: <DashboardIcon />,
			text: "Admin Dashboard",
			path: "/admin/dashboard",
		},
		{
			id: 2,
			icon: <PersonIcon />,
			text: "Users",
			path: "/admin/users",
		},
		{
			id: 3,
			icon: <PersonIcon />,
			text: "Nurses",
			path: "/admin/nurses",
		},
		{
			id: 4,
			icon: <PersonIcon />,
			text: "Patients",
			path: "/admin/patients",
		},
		{
			id: 5,
			icon: <AssessmentIcon />,
			text: "Reports",
			path: "/admin/reports",
		},
	]

	const nurseSidebarItems = [
		{
			id: 1,
			icon: <DashboardIcon />,
			text: "Dashboard",
			path: "/nurse/dashboard",
		},
		{
			id:2,
			icon : <CalendarMonthIcon/>,
			text: "Bookings",
			path: "/nurse/booking"
		},
		{
			id: 3,
			icon: <PersonIcon />,
			text: "Patients",
			path: "/nurse/patients",
		},
		{
			id: 4,
			icon: <AssessmentIcon />,
			text: "Reports",
			path: "/nurse/reports",
		},
	]

	const patientSidebarItems = [
		{
			id: 1,
			icon: <DashboardIcon />,
			text: "User Dashboard",
			path: "/dashboard",
		},
		{
			id: 2,
			icon: <PersonIcon />,
			text: "Profile",
			path: "/profile",
		},
		{
			id: 3,
			icon: <MessageIcon />,
			text: "Messages",
			path: "/messages",
		},
		{
			id: 4,
			icon: <CalendarMonthIcon />,
			text: "Appointments",
			path: "/appointments",
		},
		{
			id: 5,
			icon: <DescriptionIcon />,
			text: "Medical Records",
			path: "/medical-records",
		},
	]

	const getSidebarItems = (userType) => {
		switch (userType) {
			case "Admin":
				return adminSidebarItems;
			case "Nurse":
				return nurseSidebarItems;
			case "Patient":
			case "User":
				return patientSidebarItems;
			default:
				return patientSidebarItems;
		}
	};


	return (
		<>
			{getSidebarItems(props.userType).map((item) => (
				<ListItem
					key={item.id}
					disablePadding
					sx={{ 
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						overflow : "hidden",
						maxHeight : "64px"
					 }}
				>
					<ListItemButton
						onClick={() => navigate(item.path)}
						sx={{
							minHeight: 48,
							justifyContent: open ? "initial" : "center",
							px: 2.5,
							py: 2.5,
						}}
					>
						<ListItemIcon
							sx={{
								minWidth: 0,
								color: (theme) => theme.palette.primary.dark,
								fontSize: "30px",
								justifyContent: "center",
							}}
						>
							{item.icon}
						</ListItemIcon>
						<ListItemText
						sx={
							{
								ml:"30px",
								whiteSpace: "nowrap",
							}
						}>
							{item.text}
						</ListItemText>
					</ListItemButton>
				</ListItem>
			))}
		</>
	);
};

SideBarItems.propTypes = {
	userType: PropTypes.oneOf(["Admin", "Nurse", "Patient", "User"]).isRequired,
};

export default SideBarItems;


