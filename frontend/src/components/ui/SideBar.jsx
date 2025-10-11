import * as React from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import {
	Box,
	CssBaseline,
	Divider,
	Drawer,
	Toolbar,
} from "@mui/material";
import {
	ListItem,
	ListItemIcon,
	ListItemText,
	ListItemButton,
} from "@mui/material";
// Added RouterLink
import { useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import SideBarItems from "./SideBarItems";
import LogoButton from "./LogoButton";
import theme from "../utils/theme";
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';
import BottomNavItems from './BottomNavItems';

const drawerWidth = 70;

function ResponsiveDrawer(props) {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);
	const [activeIcon, setActiveIcon] = useState(null);

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

	const navigate = useNavigate();

	const drawer = (
		<Box>
			<Toolbar
				sx={{ display: "flex", justifyContent: "center" }}
				disableGutters
			>
				<LogoButton />
			</Toolbar>

			<Divider />
			<SideBarItems userType={props.isUser} />
			<Divider />
			<ListItem
				key={"Logout"}
				disablePadding
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					overflowX: "hidden",
					maxHeight: "80px"
				}}
			>
				<ListItemButton
					onClick={() => navigate("/logout")}
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
							color: theme.palette.primary.dark,
							fontSize: "30px",
							justifyContent: "center",
						}}
					>
						<LogoutIcon />
					</ListItemIcon>
					<ListItemText
						sx={
							{
								ml: "30px",
								whiteSpace: "nowrap",	
							}
						}>
						Logout
					</ListItemText>
				</ListItemButton>
			</ListItem>
		</Box>
	);

	return (
		<Box sx={{ display: "flex", backgroundColor: (theme) => theme.palette.background.paper }}>
			<CssBaseline />
			<Box
				component='nav'
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label='mailbox folders'
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Paper sx={{
					width: "100%",
					position: 'fixed', bottom: 0, left: 0, right: 0, display: {
						xs: "block", sm: "none"
					}
				}} elevation={3}>
					<BottomNavigation
						sx={{
							width: "100%",
							minHeight: 48,
							py: 0,
							'.MuiBottomNavigationAction-root': {
								minWidth: 0,
								maxWidth: 'none',
								px: 0.5,
								mx: 0.5,
							},
							'.Mui-selected': {
								fontWeight: 'bold',
							},
						}}
					>
						<BottomNavItems userType={props.isUser} value={activeIcon} onChange={setActiveIcon} />
					</BottomNavigation>
				</Paper>
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
