import { Stack } from "@mui/material";
import BlogSection from "./BlogSection";
import WorkflowContent from "./WorkflowContent";
import ContactSection from "./ContactSection";
import ReviewSection from "./ReviewSection";
import FeaturesSection from "./FeaturesSection";
const ContentSection = () => {
	return (
				<Stack
					container
					sx={{
						display: "flex",
						flexDirection: "column",
						flexWrap: "hidden",
					}}
				>
						<FeaturesSection />
					<Stack item xs={12}
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
					>
						<BlogSection />
					</Stack>
					<Stack item xs={12} sx={{ backgroundColor: "background.paper" }}>
						<ReviewSection />
					</Stack>
					<Stack item xs={12} sx={{ backgroundColor: "background.paper" }}>
						<WorkflowContent />
					</Stack>
					<Stack item xs={12}>
						<ContactSection />
					</Stack>
			</Stack>
	);
};

export default ContentSection;
