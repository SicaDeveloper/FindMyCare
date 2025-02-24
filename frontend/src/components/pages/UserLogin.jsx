import { useState } from "react";
import "../../css/UserLogin.scss";
import axios from "axios";
import {
  Grid2,
  Stack,
  Paper,
  FormControlLabel,
  Checkbox,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";

function LoginUser() {
  const [email, setEmailState] = useState("");
  const [password, setPasswordState] = useState("");
  const [responseMessage, setResponseMessage] = useState(null);

  const paperStyle = {
    padding: 20,
    height: "max-content",
    width: 400,
    margin: "20px auto"
  };

  const buttonStyle = {
    margin: "8px 0",
  };

  const handleLogin = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/login", {
        "email" : email,
        "password" : password,
      })
      .then((response) => {
        setResponseMessage(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Grid2
      container
      height={"85vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Grid2>
        <Paper elevation={10} style={paperStyle}>
          <Stack direction={"column"} gap={1}>
            <Grid2 align="center">
              <Typography variant="h4">Sign in</Typography>
            </Grid2>
            <TextField
              label="Email"
              placeholder="Enter Email"
              value={email}
              onChange={(event) => setEmailState(event.target.value)}
              fullWidth
              required
            />
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              value={password}
              onChange={(event) => setPasswordState(event.target.value)}
              fullWidth
              required
            />
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={buttonStyle}
              onClick={handleLogin}
              fullWidth
            >
              Sign in
            </Button>
                <Grid2 container sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}>
                  <Link href="#">Forgot password ?</Link>
                  <Link href="#">Are you a nurse ?</Link>
                </Grid2>
                <Typography>Do you have an account ? <Link href="#">Sign Up</Link></Typography>
          </Stack>
        </Paper>
      </Grid2>
    </Grid2>
  );
}

export default LoginUser;
