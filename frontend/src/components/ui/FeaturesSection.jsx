import { Container, Typography, Grid2, Paper, Box } from "@mui/material";

const FeaturesSection = () => {
	const features = [
		{
			title: "Registered and Qualified Nurses",
			description:
				"We have a team of registered and qualified nurses who are dedicated to providing the best possible care to our patients.",
			icon: "👩‍⚕️",
		},
		{
			title: "Listed Medication",
			description:
				"We provide a comprehensive range of listed medications that are carefully managed and dispensed by our qualified healthcare professionals.",
			icon: "💊",
		},
		{
			title: "80% Satisfied Customers",
			description:
				"Our commitment to excellence is reflected in our high customer satisfaction rate, with 80% of our patients reporting positive experiences with our services.",
			icon: "⭐",
		},
        {
            title: "24/7 Support",
            description:
                "Our support team is available 24/7 to assist you with any questions or concerns you may have.",
            icon: "💬",
        }
	];

	return (
		<Box component='section' sx={{ py: 8, bgcolor: "background.paper" }}>
			<Container maxWidth='lg'>
				<Grid2 container spacing={4} justifyContent='center'>
					{features.map((feature, index) => (
						<Grid2 item xs={12} sm={6} lg={4} key={index}>
							<Paper
								elevation={0}
								sx={{
									p: 3,
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									height: { xs: "20rem", md: "25rem" },
									bgcolor: "background.paper",
									borderRadius: 2,
									border: "1px solid #e0e0e0",    
									transition: "all 0.3s",
                                    textAlign: {xs: "center", md: "left"},
									maxWidth: { xs: "150rem", md: "25rem" },
									"&:hover": {
										boxShadow: 6,
									},
								}}
							>
								<Typography variant='h2' sx={{ mb: 2 }}>
									{feature.icon}
								</Typography>
								<Typography variant='h5' color='primary.main' gutterBottom>
									{feature.title}
								</Typography>
								<Typography color='text.secondary'>
									{feature.description}
								</Typography>
							</Paper>
						</Grid2>
					))}
				</Grid2>
			</Container>
		</Box>
	);
};

export default FeaturesSection;
