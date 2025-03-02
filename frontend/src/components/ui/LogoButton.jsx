import Logo from "../../media/LogoImage.png"
import { IconButton } from '@mui/material';
import { useNavigate } from "react-router-dom";
const LogoButton = () => {
    const navigate = useNavigate();
    return (
    <IconButton 
    size="large"
    alt="Logo"
    sx={{
        backgroundImage: `url(${Logo})`,
        objectFit: "contain",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "50px",
        height: "50px",
    }}
    onClick={() => {
        navigate("/");
    }}
    />
    )
}

export default LogoButton;