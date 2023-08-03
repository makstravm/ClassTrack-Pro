import { Container, Grid, Paper } from "@mui/material";

const Header = () => <header>Header</header>;

function getCurrentDate() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("ru-RU"); // Using 'en-GB' locale for dd.mm.yyyy format
  return formattedDate;
}

const Item = () => (
  <Grid container py={2} spacing={3} justifyContent={"center"}>
    <Grid item>Data</Grid>
    <Grid item> -500</Grid>
    <Grid item>Total Now</Grid>
  </Grid>
);

const App = () => (
  <Paper elevation={6}>
    <Container>
      <Header />
      <main>
        <h2>Some title</h2>
        <div>My balance</div>
        <Item />
        <section>
          <p> I want to const row with Datw, pay and etc. </p>
          <p>There should be mapping data and add new.</p>
          <Grid>
            <div>data</div>
            <div>500</div>
            <div>Total</div>
          </Grid>
        </section>
      </main>
    </Container>
  </Paper>
);

export default App;
