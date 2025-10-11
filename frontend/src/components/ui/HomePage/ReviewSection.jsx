import PropTypes from "prop-types";
import React from "react";
import {
	Box,
	Container,
	Typography,
	Card,
	CardContent,
	Rating,
	Stack,
	Button,
	Slide,
	Avatar,
} from "@mui/material";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { styled } from "@mui/material/styles";
import { current } from "@reduxjs/toolkit";

const defaultReviews = [
	{
		id: 1,
		userName: "John Doe",
		rating: 4.5,
		content: "Amazing service!",
		date: "March 2024",
	},
	{
		id: 2,
		userName: "Sarah Johnson",
		rating: 5.0,
		content:
			"The staff was incredibly professional and caring. Highly recommend!",
		date: "March 2024",
	},
	{
		id: 3,
		userName: "Michael Chen",
		rating: 4.5,
		content:
			"Very thorough and attentive service. Made me feel comfortable throughout.",
		date: "February 2024",
	},
	{
		id: 4,
		userName: "Emily Rodriguez",
		rating: 5.0,
		content:
			"Outstanding experience from start to finish. The team is exceptional!",
		date: "February 2024",
	},
	{
		id: 5,
		userName: "David Wilson",
		rating: 4.0,
		content:
			"Great attention to detail and friendly staff. Will definitely return.",
		date: "January 2024",
	},
];

const ReviewButton = styled(Button)(({ theme }) => ({
	resize: "none",
	height: "20rem",
	width: "100px",
}));

const ReviewSection = ({ reviews = defaultReviews }) => {
	const [currentStep, setCurrentStep] = useState(0);
	const [slideDirection, setSlideDirection] = useState("left");
	const [isAnimating, setIsAnimating] = useState(false);
	const totalSteps = reviews.length;
	const containerRef = React.useRef(null);

	const handleNext = () => {
		if (isAnimating) return;
		setSlideDirection("right");
		setIsAnimating(true);
		setTimeout(() => {
			setCurrentStep((prev) => (prev + 1) % totalSteps);
			setIsAnimating(false);
		}, 300);
	};

	const handlePrev = () => {
		if (isAnimating) return;
		setSlideDirection("left");
		setIsAnimating(true);
		setTimeout(() => {
			setCurrentStep((prev) => (prev - 1 + totalSteps) % totalSteps);
			setIsAnimating(false);
		}, 300);
	};

	const currentReview = reviews[currentStep];

	return (
		<Box
			sx={{
				py: 8,
				backgroundColor: "background.paper",
			}}
		>
			<Container
				maxWidth='lg'
				sx={{
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
				}}
			>
				<Typography
					variant='h4'
					sx={{
						textAlign: "center",
						mb: 6,
						color: "text.primary",
					}}
				>
					Find out what our patients are saying about us
				</Typography>

				<Stack
					justifyContent={{ xs: "center" }}
					direction={{ xs: "column", md: "row" }}
					spacing={4}
					sx={{ justifyContent: "center" }}
				>
					<ReviewButton onClick={handlePrev}>
						<ArrowBackIosNewIcon />
					</ReviewButton>
					<Box
						sx={{
							position: "relative",
							width: "100vw",
							height: "20rem",
							overflow: "hidden",
							backgroundColor: "background.paper",
						}}
					>
						<Slide
							direction={slideDirection}
							in={!isAnimating}
							timeout={300}
							container={containerRef.current}
						>
							<Card
								key={currentReview.id}
								sx={{
									position: "absolute",
									width: "100%",
									height: "100%",
									borderRadius: "1rem",
									backgroundColor: "background.paper",
									border: "1px solid #e0e0e0",
								}}
							>
								<CardContent
									sx={{
										display: "flex",
										flexDirection: "column",
										gap: 3,
										height: "100%",
										paddingX: 6,
										paddingY: 5,
										justifyContent: "space-between",
									}}
								>
									<Stack
										direction='row'
										alignItems='center'
										gap={2}
									>
										<Avatar
											sx={{
												bgcolor: "primary.main",
												width: 56,
												height: 56,
												fontSize: "1.5rem",
											}}
										>
											{currentReview.userName
												.split(" ").map((n) => n[0])
												.join("")
												.slice(0, 2)}
										</Avatar>
										<Stack direction={"column"} alignItems='flex-start'>
											 <Typography sx={{
												fontWeight: "bold",
											 }}>Ethan Miller</Typography>
											 <Typography sx={{
												color: "text.primary",
												fontSize: "0.875rem",
											 }}>Product Designer</Typography>
										</Stack>
									</Stack>
									<Typography
										variant='body1'
										sx={{ flexGrow: 1, color: "text.primary" }}
									>
										"{currentReview.content}"
									</Typography>
									<Stack direction={"row"} alignItems='center' gap={1}>
										<Rating value={currentReview.rating} readOnly></Rating>
										<Typography sx={{
											color: "text.secondary",
											fontSize: "1.45rem",
										}}>||</Typography>
										 <Typography>{currentReview.rating}</Typography>
									</Stack>
								</CardContent>
							</Card>
						</Slide>
					</Box>
					<ReviewButton onClick={handleNext}>
						<ArrowForwardIosIcon />
					</ReviewButton>
				</Stack>

				<Typography
					sx={{
						textAlign: "center",
						mt: 2,
					}}
				>
					{currentStep + 1} / {totalSteps}
				</Typography>
			</Container>
		</Box>
	);
};

ReviewSection.propTypes = {
	reviews: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			userName: PropTypes.string.isRequired,
			rating: PropTypes.number.isRequired,
			content: PropTypes.string.isRequired,
		})
	),
};

export default ReviewSection;
