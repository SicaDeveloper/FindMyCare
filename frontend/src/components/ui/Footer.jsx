import { BottomNavigation, useTheme, Stack, Typography } from "@mui/material";
import "../../css/footer.scss";
import { styled } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const FooterTypographyHeader = styled(Typography)(({ theme }) => ({
	color: "#fff",
	fontSize: 28,
	fontWeight: "bold",
	opacity: 0.9,
}));

const FooterTypography = styled(Typography)(({ theme }) => ({
	color: "#fff",
	fontSize: 16,
	opacity: 0.9,
}));

const FooterStack = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: "10px",
}));

const Footer = () => {
	return (
		<BottomNavigation
			sx={{
				height: "fit-content",
				width: "100%",

				backgroundColor: useTheme().palette.background.info,
				display: "flex",
				padding: "2vh 2vh 2vh 2vh",
				flexDirection: "column",
				justifyContent: "space-evenly",
				alignItems: "stretch",
				[useTheme().breakpoints.down("md")]: {
					gap: "5px",
					padding: "20px 0 20px 0",
				},
			}}
		>
			<Stack
				sx={{
					backgroundColor: useTheme().palette.background.info,
					display: "flex",
					px: { xs: 2, md: 8 },
					py: { xs: 2, md: 8 },
					flexDirection: { xs: "column", md: "row" },
					justifyContent: "space-around",
					alignItems: "stretch",
					[useTheme().breakpoints.down("md")]: {
						gap: "5px",
					},
				}}
			>
				<FooterStack>
					<FooterTypographyHeader>Services</FooterTypographyHeader>
					<FooterTypography>Service 1</FooterTypography>
					<FooterTypography>Service 2</FooterTypography>
					<FooterTypography>Service 3</FooterTypography>
					<FooterTypography>Service 4</FooterTypography>
				</FooterStack>
				<FooterStack>
					<FooterTypographyHeader>Overview</FooterTypographyHeader>
					<FooterTypography>About Us</FooterTypography>
					<FooterTypography>Our Mission</FooterTypography>
					<FooterTypography>Our Team</FooterTypography>
				</FooterStack>
				<FooterStack>
					<FooterTypographyHeader>Contact</FooterTypographyHeader>
					<FooterTypography>Phone: +1 202 555 0111</FooterTypography>
					<FooterTypography>
						Email: rajDangol.dev@gmail.com
					</FooterTypography>
					<FooterTypography>
						Address: 1234 
					</FooterTypography>
				</FooterStack>
			</Stack>
			<Stack>
				<FooterStack
        sx={{
          flexDirection: "row",
          justifyContent: "center",
		  py: { xs: 2, md: 4 }
        }}>
						<InstagramIcon className='social-icon' />
						<XIcon className='social-icon' />
						<LinkedInIcon className='social-icon' />
						<YouTubeIcon className='social-icon' />
				</FooterStack>
			</Stack>
		</BottomNavigation>
	);
};

export default Footer;
