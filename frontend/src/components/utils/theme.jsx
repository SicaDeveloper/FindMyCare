import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';


const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff', // blue
      light: '#1dadff',
      dark: '#2656BD',
    },
    secondary: {
      main: '#8400f1', 
      light: '#ad6bf7',
      dark: '#5800dd',
    },
    background: {
			default: "#ffffff",
			paper: "#f7f7f7",
			info: "#1f1f1f",
    },
    text: {
			primary: "#333333",
			secondary: "#6A6B65",
      card : "#f7f7f7",
			disabled: "#666666",
    },
  },
  typography: {
    h1: {
      fontFamily: 'Lexend Deca',
      fontSize: '6rem',
    },
    h2: {
      fontFamily: 'Lexend Deca',
      fontSize: '3.5rem',
    },
    h3: {
      fontFamily: 'Lexend Deca',
      fontSize: '3rem',
    },
    h4: {
      fontFamily: 'Lexend Deca',
      fontSize: '2.5rem',
    },
    h5: {
      fontFamily: 'Lexend Deca',
      fontSize: '2rem',
    },
    h6: {
      fontFamily: 'Lexend Deca',
      fontSize: '1.5rem',
    },
    body: {
      fontFamily: 'Open Sans',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
    bold: {
      fontWeight: 700,
    },
    fontSize: {
      xs: '1.2rem',
      sm: '1.5rem',
      md: '1.8rem',
      lg: '2rem',
    },
  },
  overrides: {
    MuiTypography: {
      root: {
        '&.footer-typography': {
          fontSize: '0.8rem',
          color: '#fff',
          opacity: 0.6,
        },
      },
    },
    MuiIconButton: {
      root: {
        '&.LogoButton': {
          padding: 0,
        },
      },
    },
  },
  props: {
    MuiAppBar: {
      color: 'inherit',
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


const StyledInput = styled(OutlinedInput)(({ theme }) => ({
    width: '100%',
    borderRadius: 4,
    backgroundColor: theme.palette.background.default,
    marginBottom: theme.spacing(2),
    '& .MuiInputBase-input': {
        padding: theme.spacing(1.5),
        fontSize: '1rem',
    }
}));

const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
    paddingLeft: theme.spacing(0.5),
    fontFamily: 'Lexend Deca, sans-serif',
    fontWeight: '600',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(0.5),
    fontSize: '1rem',
    '&.Mui-focused': {
        color: theme.palette.primary.main,
    },
    '&.Mui-error': {
        color: theme.palette.error.main,
    },
    '&.Mui-disabled': {
        color: theme.palette.text.disabled,
    },
    '&.MuiFormLabel-filled': {
        color: theme.palette.text.primary,
    },
}));

const StyledButton = styled(Button)(({ theme }) => ({
    fontFamily: 'Lexend Deca, sans-serif',
    fontWeight: '400',
    borderRadius: 8,
    textTransform: 'none',
    width: '70%',
    alignSelf: 'center',
    padding: theme.spacing(1.5),
    fontSize: '1rem',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
}));

const StyledImage = styled('img')(({ theme }) => ({
    width: '60px',
    height: '60px',
    objectFit: 'contain',
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'scale(1.05)',
    },
}));

export { StyledInput, StyledInputLabel, StyledButton, StyledImage };
export default theme;

