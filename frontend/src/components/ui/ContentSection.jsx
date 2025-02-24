import { Box, Container, Typography, Grid2 } from "@mui/material";
import BlogSection from "./BlogSection";
import WorkflowContent from "./WorkflowContent";
import ContactSection from "./ContactSection";
import ReviewSection from "./ReviewSection";
import FeaturesSection from "./FeaturesSection";
const ContentSection = () => {
	return (
				<Grid2
					container
					sx={{
						display: "flex",
						flexDirection: "column",
						flexWrap: "hidden",
					}}
				>
					<Grid2>
						<FeaturesSection />
					</Grid2>
					<Grid2 item xs={12}
					sx={{
						display: "flex",
						backgroundColor: "background.default",
						justifyContent: "center",
						alignItems: "center",
					}}
					>
						<BlogSection />
					</Grid2>
					<Grid2 item xs={12} sx={{ backgroundColor: "primary.light" }}>
						<ReviewSection />
					</Grid2>
			</Grid2>
	);
};

export default ContentSection;
