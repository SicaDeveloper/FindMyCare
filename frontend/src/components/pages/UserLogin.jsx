import { useState } from "react";
import axios from "axios";
import {
  Paper,
} from "@mui/material";

import { Box, Stack } from "@mui/system";
import theme from "../utils/theme";
import LoginPaper from "../ui/LoginPage/LoginPaper";
import SideImage from "../ui/LoginPage/LoginSideImage";

function LoginUser() {

  const paperStyle = {
    padding: 20,
    height: "max-content",
    width: 400,
    margin: "20px auto"
  };

  const buttonStyle = {
    margin: "8px 0",
  };

  return (
    <Box sx={
      {
        width:"100vw",
        height:"100vh",
        padding: 10,
        bgcolor: theme.palette.primary.dark
      }
    }>
        <Stack sx={{
            width: "100%",
            height: "100%",
            gap:24,
            flexDirection: {
                xs: "column",
                sm: "row",
            },
            alignItems: "center",
            }}>
            <SideImage />
            <LoginPaper />
        </Stack>
    </Box>
  );
}

export default LoginUser;
