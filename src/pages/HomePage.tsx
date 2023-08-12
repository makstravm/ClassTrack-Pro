import { Container } from "@mui/material";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { LessonsListWrapper } from "../components/LessonsListWrapper";
import { AddLessonBtn } from "../components/AddLessonBtn";
import { AddFunds } from "../components/AddFunds";

export const HomePage = () => (
  <Container>
    <Header />
    <Main>
      <LessonsListWrapper />
      <AddLessonBtn />
    </Main>
    <AddFunds />
  </Container>
);
