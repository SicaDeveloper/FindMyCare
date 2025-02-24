import Logo from "../../media/LogoImage.png"
import { IconButton } from '@mui/material';
const LogoButton = () => {
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
    onClick={() => { alert("Logo Clicked")}
    } 
    />
    )
}

export default LogoButton;