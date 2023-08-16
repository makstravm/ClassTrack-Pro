import { Avatar, Box, Container } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { RoutePath } from "../types";
import { useUserContext } from "../context/userContext";

export const AuthLayout = () => {
  const { user } = useUserContext();
  if (user) {
    return <Navigate to={RoutePath.HOME} replace />;
  }

  return (
    <Container component="main" maxWidth="xs" sx={{ height: "90vh" }}>
      <Box
        height="100%"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Outlet />
      </Box>
    </Container>
  );
};
