import { Grid, Paper } from "@mui/material";

export const Header = () => (
  <Paper elevation={8}>
    <Grid container p={2} justifyContent={"space-between"}>
      <Grid item>Total spent sum</Grid>
      <Grid item>Current sum</Grid>
      <Grid item>May be Log in/out</Grid>
    </Grid>
  </Paper>
);
