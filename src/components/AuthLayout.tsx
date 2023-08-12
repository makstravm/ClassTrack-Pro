import { Avatar, Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export const AuthLayout = () => (
  <Container component="main" maxWidth="xs">
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Outlet />
    </Box>
  </Container>
);
