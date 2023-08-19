import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Button, Grid, Popover, Typography } from "@mui/material";
import { signOutUser } from "../api/user";
import { useUserContext } from "../context/userContext";

export const UserPanel = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { user } = useUserContext();
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const id = !!anchorEl ? "simple-popover" : undefined;

  return (
    <Grid item>
      <Button
        aria-describedby={id}
        variant="text"
        color="secondary"
        onClick={handleClick}
        sx={{ textTransform: "inherit" }}
      >
        <Typography component={"span"} variant="h6">
          Hi,
        </Typography>
        <Typography component={"span"} variant="h6" fontWeight={"bold"} pl={1}>
          {user?.displayName || user?.email}
        </Typography>
        <ArrowDropDownIcon />
      </Button>
      <Popover
        id={id}
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box p={1}>
          <Button variant="outlined" color="secondary" onClick={signOutUser}>
            Sign out
          </Button>
        </Box>
      </Popover>
    </Grid>
  );
};
