import { Container } from "@mui/material";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { AddLessonBtn } from "./components/AddLessonBtn";
import { LessonsListWrapper } from "./components/LessonsListWrapper";

const App = () => (
  <Container>
    <Header />
    <Main>
      <LessonsListWrapper />
      <AddLessonBtn />
    </Main>
  </Container>
);

export default App;
