import {
	Box,
	Container,
	Typography,
	Card,
	CardContent,
	Chip,
	IconButton,
	Grid2,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const BlogSection = () => {
	const colorBlocks = [
		{ id: 1, color: "#FF6B6B" },
		{ id: 2, color: "#4ECDC4" },
		{ id: 3, color: "#45B7D1" },
		{ id: 4, color: "#96CEB4" },
		{ id: 5, color: "#FFEEAD" },
		{ id: 6, color: "#D4A5A5" },
	];

	return (
		<Box component='section' py={8} bgcolor='background.paper' width='100%'>
			<Container maxWidth='lg'>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: {
							xs: '20rem',
							sm: '20rem',
							md: '1fr 1fr 1fr',
						},
						gridTemplateRows: {
							xs: 'repeat(3, 20rem)',
							sm: '1fr 1fr',
						},
						overflowX: "scroll",
						gap: '16px',
						justifyItems: 'center',
						alignItems: 'center',
					}}
				>
					<Box
						key={1}
						sx={{
							gridRow: {
								xs: '3',
								sm: '1',
							},
							height: "20rem",
							width: "20rem",
							backgroundColor: colorBlocks[0].color,
							borderRadius: "8px",
						}}
					></Box>
					<Box
						key={2}
						sx={{
							height: "20rem",
							width: "20rem",
							gridRow: {
								xs: '2',
								sm: '2',
							},
							backgroundColor: colorBlocks[1].color,
							borderRadius: "8px",
						}}
					></Box>
					<Box
						key={3}
						sx={{
							height: {
								xs: "20rem",
								sm: "100%",
							},
							width: {
								xs: "20rem",
								sm: "100%",
							},
							gridRow: {
								xs: '1',
								sm: '1 / span 2',
							},
							gridColumn: {
								xs: '1',
								sm: '1 / span 2',
							},
							backgroundColor: colorBlocks[2].color,
							borderRadius: "8px",
						}}
					></Box>
				</Box>
			</Container>
		</Box>
	);
};

export default BlogSection;
