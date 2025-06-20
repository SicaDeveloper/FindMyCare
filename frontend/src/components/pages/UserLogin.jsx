import { useState } from "react";
import axios from "axios";
import {
  Paper,
} from "@mui/material";

import { Box, Stack } from "@mui/system";
import theme from "../utils/theme";
import LoginPaper from "../ui/LoginPage/LoginPaper";
import SideImage from "../ui/LoginPage/SideImage";

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
    <Box sx={
      {
        width:100,
        height:100,
        padding: 10,
        bgcolor: theme.palette.primary.dark
      }
    }>
      <Paper sx={
        {
          width:100,
          height:100,
          padding:10,
          bgcolor: theme.palette.primary.dark
        }
      }>
        <Stack>
            <SideImage />
            <LoginPaper />
        </Stack>
      </Paper>
    </Box>
  );
}

export default LoginUser;
