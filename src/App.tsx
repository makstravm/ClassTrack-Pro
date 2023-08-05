import { Box, Button, Container, Grid, Paper } from "@mui/material";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import NumbersIcon from "@mui/icons-material/Numbers";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";
import { AddLessonBtn } from "./components/AddLessonBtn";
function getCurrentDate() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("ru-RU"); // Using 'en-GB' locale for dd.mm.yyyy format
  return formattedDate;
}

const Item = () => {
  return (
    <Box
      p={3}
      sx={{
        background: "#ececec",
        display: "flex",
        justifyContent: "center",
        fontWeight: "bold",
      }}
    >
      <Grid container spacing={3} justifyContent={"space-around"}>
        <Grid item px={2}>
          <NumbersIcon />
        </Grid>
        <Grid item px={2}>
          Data
        </Grid>
        <Grid item px={2}>
          Price
        </Grid>
        <Grid item px={2}>
          Total
        </Grid>
        <Grid item px={2}>
          isPaid
          <CheckCircleIcon style={{ color: "green" }} />
          <CancelIcon style={{ color: "red" }} />
        </Grid>
      </Grid>
    </Box>
  );
};

const App = () => (
  <Container>
    <Header />
    <Main>
      <Item />
      <AddLessonBtn />
    </Main>
  </Container>
);

export default App;
