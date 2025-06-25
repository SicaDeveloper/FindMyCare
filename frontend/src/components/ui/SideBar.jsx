import * as React from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import {
	AppBar,
	Box,
	CssBaseline,
	Divider,
	Drawer,
	IconButton,
	Toolbar,
} from "@mui/material";
import {
	ListItem,
	ListItemIcon,
	ListItemText,
	ListItemButton,
} from "@mui/material";
// Added RouterLink
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import SideBarItems from "./SideBarItems";
import Avatar from '@mui/material/Avatar';
import LogoButton from "./LogoButton";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "../utils/theme";
const drawerWidth = 70;

function ResponsiveDrawer(props) {
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [isClosing, setIsClosing] = React.useState(false);

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
									overflowX : "hidden",
									maxHeight : "80px"
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
											color: theme.palette.primary["400"],
											fontSize: "30px",
											justifyContent: "center",
										}}
									>
										<LogoutIcon />
									</ListItemIcon>
									<ListItemText
									sx={
										{
											ml:"30px",
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
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar 
				sx={{
					opacity:0.8,
					height: "8vh",
					width: {
						sm: `calc(100% - ${drawerWidth}px)`,
						md: `calc(100% - ${drawerWidth}px)`,
						lg: `calc(100% - ${drawerWidth}px)`,
					},
				}}
			>
				<Toolbar
				sx={{
					display: "flex",
					justifyContent: "flex-end",
					alignContent: "center",
				}}>
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
					<Avatar>N</Avatar>
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
							width: {
								sm: drawerWidth,
								"&:hover": {
									transition: "width 0.4s ease-in-out",
									width: "20rem",
								},
							},
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
