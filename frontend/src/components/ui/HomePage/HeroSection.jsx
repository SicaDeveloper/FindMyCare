import { Stack, Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import video from "../../../media/hero-background-video.mp4";
import "../../../css/HeroSection.scss";
import theme from "../../utils/theme";

const HeroSection = () => {
	return (
		<Box
			sx={{			
				height: "92svh",
			}}
		>
			<video className="hero-section-video" autoPlay src={video} loop muted></video>
			<Container
				maxWidth={false}
				sx={{
					display: "flex",
					flexDirection: { xs: 'column', md: 'row' },
					justifyContent: "space-around",
					alignItems: "center",
					height: "90vh",
					gap: 1,
					width: "80svw"
				}}
			>
				<Stack 
					flexGrow={3} 
					spacing={1}
					sx={{
						textAlign: { xs: 'center', md: 'left' },
						paddingTop: { xs: 10, md: 0 }
					}}
				>
					<Typography 
						variant='h1'
						sx={{
							color: '#Ffffe0',
							fontWeight: 1000,
							fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4.6rem' },
							marginBottom: 3
						}}
					>
						Your Destination to Excellent Homecare
					</Typography>
					<Typography 
						variant='h4'
						sx={{
							color: '#ffffe0',
							lineHeight: 1.5,
							marginBottom: 3,
							display: { xs: 'none', md: 'block' }
						}}
					>
						FindMyCare
					</Typography>
					<Typography 
						variant='body1'
						sx={{
							color: '#F7F7F7',
							marginBottom: 4
						}}
					>
						Professional and compassionate home care services tailored to your needs.
					</Typography>
				</Stack>
				<Stack 
					flexGrow={0.5}
					spacing={1}
					sx={{
						alignItems: { xs: 'center', md: 'flex-start' },
						marginBottom: { xs: 20, md: 0, lg: -5 },
					}}
				>
					<Button 
						variant='contained'
						size="large"
						sx={{
							backgroundColor: theme.palette.primary['300'],
							whiteSpace: 'nowrap',
							padding: {
								xs: '20px 30px',
								md: '20px 60px',
								lg: '20px 70px'
							},
							fontSize: {
								xs: "1.1rem",
								md: "1.2rem",
								lg: "1.3rem"
							},
							'&:hover': {
								backgroundColor: '#2980B9'
							}
						}}
					>
						Get Started
					</Button>
					<Button 
						variant='outlined'
						size="large"
						sx={{
							whiteSpace: 'nowrap',
							borderColor: '#ffffe0',
							color: '#ffffe0',
							padding: {
								xs: '20px 30px',
								md: '20px 60px',
								lg: '20px 70px'
							},
							fontSize: {
								xs: "1.1rem",
								md: "1.2rem",
								lg: "1.3rem"
							},
							'&:hover': {
								borderColor: '#2980B9',
								backgroundColor: 'rgba(52, 152, 219, 0.1)'
							}
						}}
					>
						Learn More
					</Button>
				</Stack>
			</Container>
		</Box>
	);
};

export default HeroSection;
