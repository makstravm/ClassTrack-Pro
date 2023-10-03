import { ILessons } from "../types";
import { Box, Grid } from "@mui/material";
import NumbersIcon from "@mui/icons-material/Numbers";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useLessonsContext } from "../context/lessonsContext";
import { useState } from "react";
import { DeleteBtn } from "./DeleteBtn";

type IProps = {
  lesson?: ILessons;
  index?: number;
};

const Lesson = (props: IProps) => {
  const { index, lesson } = props;
  const [isHover, setIsHover] = useState<boolean>(false);
  const { delLesson } = useLessonsContext();
  const getBcgHEX = () => (index && index % 2 ? "#fff" : "#cdcdcd");

  const icon = lesson?.isPaid ? (
    <CheckCircleIcon style={{ color: "green" }} />
  ) : (
    <CancelIcon style={{ color: "red" }} />
  );

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (index) {
      setIsHover(true);
    }
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (index) {
      setIsHover(false);
    }
  };
  return (
    <Box
      p={3}
      pr={6}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        background: index ? getBcgHEX() : "#565656",
        display: "flex",
        justifyContent: "center",
        color: index ? "#000" : "#fff",
        fontWeight: "bold",
        boxShadow: isHover ? "0px 0px 10px 2px #565656 " : "none",
        position: "relative",
      }}
    >
      <Grid container spacing={3} justifyContent={"space-around"}>
        <Grid item width={100} textAlign={"center"}>
          {index ? index : <NumbersIcon />}
        </Grid>
        <Grid item width={100} textAlign={"center"}>
          {lesson?.date ? lesson?.date : "Date"}
        </Grid>
        <Grid item width={75} textAlign={"center"}>
          {lesson?.price ? lesson?.price : "Price"}
        </Grid>
        <Grid item width={100} textAlign={"center"}>
          {typeof lesson?.currentSum === "number"
            ? lesson?.currentSum
            : "Total"}
        </Grid>
        <Grid item width={75} textAlign={"center"}>
          {!index ? "isPaid" : icon}
        </Grid>
        {isHover && lesson?.date && (
          <DeleteBtn date={lesson.date} onClick={() => delLesson(lesson)} />
        )}
      </Grid>
    </Box>
  );
};

export const LessonsListWrapper = () => {
  const { lessons } = useLessonsContext();
  return (
    <Box boxShadow={"0px 0px 12px #d7ffd3"}>
      <Lesson />
      <Box style={{ height: "65vh", overflowY: "scroll" }}>
        {!!lessons.length ? (
          lessons.map((l, i) => <Lesson key={l.id} index={i + 1} lesson={l} />)
        ) : (
          <div>Oops.... you don't have any lessons yet</div>
        )}
      </Box>
    </Box>
  );
};
