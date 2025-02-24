import { Stack, Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import video from "../../media/hero-background-video.mp4";
import "../../css/HeroSection.scss";


const HeroSection = () => {
	return (
		<Box
			sx={{			
				width: "100%",
				height: {
					xs: "36rem",
					md: "40rem",
					lg: "40rem"
				}
			}}
		>
			<video className="hero-section-video" autoPlay src={video} loop muted></video>
			<Container
				sx={{
					display: "flex",
					flexDirection: { xs: 'column', md: 'row' },
					justifyContent: "space-between",
					alignItems: "center",
					height: "100vh",
					gap: 3,
				}}
			>
				<Stack 
					flexGrow={2} 
					spacing={3}
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
							fontSize: { xs: '2.5rem', md: '3.5rem' },
							marginBottom: 2
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
						marginBottom: { xs: 20, md: 0 },
					}}
				>
					<Button 
						variant='contained'
						size="large"
						sx={{
							backgroundColor: '#3498DB',
							padding: '12px 32px',
							fontSize: '1rem',
							'&:hover': {
								backgroundColor: '#2980B9'
							}
						}}
					>
						Find a Caregiver
					</Button>
					<Button 
						variant='outlined'
						size="large"
						sx={{
							borderColor: '#ffffe0',
							color: '#ffffe0',
							padding: '12px 32px',
							fontSize: '1.1rem',
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
