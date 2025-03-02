import * as React from "react";
import PropTypes from "prop-types";
import {
	AppBar,
	Box,
	CssBaseline,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Link,
	Typography,
} from "@mui/material";
import { useNavigate, Link as RouterLink } from "react-router-dom"; // Added RouterLink
import {
	MoveToInbox as InboxIcon,
	Mail as MailIcon,
	Menu as MenuIcon,
} from "@mui/icons-material";
import LogoButton from "./LogoButton";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DescriptionIcon from "@mui/icons-material/Description";

const drawerWidth = 70;

function ResponsiveDrawer(props) {
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [isClosing, setIsClosing] = React.useState(false);

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
	].map((item) => ({
		...item,
		onClick: () => navigate(item.path),
	}));

	const nurseSidebarItems = [
		{
			id: 1,
			icon: <DashboardIcon />,
			text: "Nurse Dashboard",
			path: "/nurse/dashboard",
		},
		{
			id: 2,
			icon: <PersonIcon />,
			text: "Patients",
			path: "/nurse/patients",
		},
		{
			id: 3,
			icon: <AssessmentIcon />,
			text: "Reports",
			path: "/nurse/reports",
		},
	].map((item) => ({
		...item,
		onClick: () => navigate(item.path),
	}));

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
			icon: <MailIcon />,
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
	].map((item) => ({
		...item,
		onClick: () => navigate(item.path),
	}));

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

	const handleDrawerClose = () => {
		setIsClosing(true);
		setMobileOpen(false);
	};

	const handleDrawerTransitionEnd = () => {
		setIsClosing(false);
	};

	const handleDrawerToggle = () => {
		if (!isClosing) {
			setMobileOpen(!mobileOpen);
		}
	};

	const drawer = (
		<div>
			<Toolbar
				sx={{ display: "flex", justifyContent: "center" }}
				disableGutters
			>
				<LogoButton />
			</Toolbar>

			<Divider />
			<List>
				{getSidebarItems(props.isUser).map((item) => (	
					<ListItem key={item.id} disablePadding>
						<ListItemButton
							onClick={item.onClick}
							sx={{
								justifyContent: "center",
							}}
						>
							<ListItemIcon
								sx={{ justifyContent: "center",p:1, fontSize: "1.4rem" }}
							>
								{item.icon}
							</ListItemIcon>
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
		</div>
	);

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position='fixed'
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{
							fontSize: "1.8rem",
							ml: 1,
							display: { sm: "none" },
						}}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Box
				component='nav'
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label='mailbox folders'
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					variant='temporary'
					open={mobileOpen}
					onTransitionEnd={handleDrawerTransitionEnd}
					onClose={handleDrawerClose}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
					slotProps={{
						root: {
							keepMounted: true, // Better open performance on mobile.
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant='permanent'
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
}

ResponsiveDrawer.propTypes = {
	isUser: PropTypes.oneOf(["Admin", "Nurse", "Patient", "User"]),
};

export default ResponsiveDrawer;
