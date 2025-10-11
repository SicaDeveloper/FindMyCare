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
			<BlogSection />
			<ReviewSection />
			<WorkflowContent />
			<ContactSection />
		</Stack>
	);
};

export default ContentSection;
