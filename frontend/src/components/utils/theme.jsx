import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#2656bd",
			50: "#e7ebf7",
			100: "#c2cbeb",
			200: "#9aaadd",
			300: "#7189d0",
			400: "#4f6fc6",
			500: "#2656bd",
			600: "#1f4eb3",
			700: "#1044a7",
			800: "#003a9b",
			900: "#002886",
		},
		secondary: {
			main: "#38c336",
			50: "#e8f8e8",
			100: "#c8edc6",
			200: "#a4e2a1",
			300: "#7dd778",
			400: "#5ccd58",
			500: "#38c336",
			600: "#2db32c",
			700: "#1ba11f",
			800: "#008f10",
			900: "#007000",
		},
		background: {
			default: "#ffffff",
			paper: "#f7f7f7",
			info: "#1f1f1f",
		},
		text: {
			primary: "#333333",
			secondary: "##6A6B65",
			card: "#f7f7f7",
			disabled: "#666666",
		},
	},
	typography: {
		h1: {
			fontFamily: "Lexend Deca",
			fontSize: "6rem",
		},
		h2: {
			fontFamily: "Lexend Deca",
			fontSize: "3.5rem",
		},
		h3: {
			fontFamily: "Lexend Deca",
			fontSize: "3rem",
		},
		h4: {
			fontFamily: "Lexend Deca",
			fontSize: "2.5rem",
		},
		h5: {
			fontFamily: "Lexend Deca",
			fontSize: "2rem",
		},
		h6: {
			fontFamily: "Lexend Deca",
			fontSize: "1.5rem",
		},
		body: {
			fontFamily: "Open Sans",
			fontWeightLight: 300,
			fontWeightRegular: 400,
			fontWeightMedium: 500,
			fontWeightBold: 700,
		},
		bold: {
			fontWeight: 700,
		},
		fontSize: {
			xs: "1.2rem",
			sm: "1.5rem",
			md: "1.8rem",
			lg: "2rem",
		},
	},
	overrides: {
		MuiTypography: {
			root: {
				"&.footer-typography": {
					fontSize: "0.8rem",
					color: "#fff",
					opacity: 0.6,
				},
			},
		},
		MuiIconButton: {
			root: {
				"&.LogoButton": {
					padding: 0,
				},
			},
		},
	},
	props: {
		MuiAppBar: {
			color: "inherit",
		},
	},
	shape: {
		borderRadius: 4,
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
			tablet: 640, // Custom breakpoint
			desktop: 1024, // Custom breakpoint
		},
	},
});

export default theme;
