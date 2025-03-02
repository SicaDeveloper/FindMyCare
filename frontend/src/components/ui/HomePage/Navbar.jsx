import { AppBar, Link, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import LogoButton from "../LogoButton";
import useMediaQuery from '@mui/material/useMediaQuery';
import NavbarButton from "./NavbarButton";

// Styled components
const StyledLink = styled(Link)(({ theme }) => ({
  color: '#fff',
  textDecoration: 'none',
  height: '20px',
  padding: '10px 20px',
  '&:hover': {
    cursor: 'pointer',
    color: '#fff',
    opacity: 0.81,
    backgroundColor: theme.palette.primary.dark,
    borderBottom: '3px solid white',
    transition: 'background-color 0.3s ease-in-out, border-bottom 0.12s ease-in-out',
  }
}));

const StyledContainer = styled(Container)({
  textAlign: "center",
});

function mediaQuery(screenSize) {
  if (screenSize) {
    return <NavbarButton />;
  }
  
  return (
    <StyledContainer>
      <StyledLink to='/'>Home</StyledLink>
      <StyledLink to='/'>About</StyledLink>
      <StyledLink to='/'>Contact</StyledLink>
    </StyledContainer>
  );
}

function Navbar() {
  const smallDevice = useMediaQuery("(max-width: 600px)");

  return (
    <AppBar
      position="static"
      sx={{
        opacity: 0.9,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "80px",
        padding: {
          xs: "0 30px",  // for mobile (smallDevice)
          sm: "0 80px",  // for larger screens
        },
        gap: "2px",
      }}
    >
      <LogoButton />
      {mediaQuery(smallDevice)}
    </AppBar>
  );
}

export default Navbar;

