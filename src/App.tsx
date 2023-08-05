import { Container } from "@mui/material";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { AddLessonBtn } from "./components/AddLessonBtn";
import { LessonsListWrapper } from "./components/LessonsListWrapper";
import { AddFunds } from "./components/AddFunds";

const App = () => (
  <Container>
    <Header />
    <Main>
      <LessonsListWrapper />
      <AddLessonBtn />
    </Main>
    <AddFunds />
  </Container>
);

export default App;
