import NumbersIcon from "@mui/icons-material/Numbers";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useLessonsContext } from "../context/lessonsContext";
import { Box, Grid } from "@mui/material";
import { ILessons } from "../types";

type IProps = {
  lesson?: Omit<ILessons, "id">;
  index?: number;
};

const Lesson = (props: IProps) => {
  const { index, lesson } = props;
  const getBcgHEX = () => (index && index % 2 ? "#fff" : "#cdcdcd");

  const icon = lesson?.isPaid ? (
    <CheckCircleIcon style={{ color: "green" }} />
  ) : (
    <CancelIcon style={{ color: "red" }} />
  );

  return (
    <Box
      p={3}
      sx={{
        background: index ? getBcgHEX() : "#565656",
        display: "flex",
        justifyContent: "center",
        color: index ? "#000" : "#fff",
        fontWeight: "bold",
      }}
    >
      <Grid container spacing={3} justifyContent={"space-around"}>
        <Grid item xs={2} px={2} textAlign={"center"}>
          {index ? index : <NumbersIcon />}
        </Grid>
        <Grid item xs={2} px={2} textAlign={"center"}>
          {lesson?.date ? lesson?.date : "Date"}
        </Grid>
        <Grid item xs={2} px={2} textAlign={"center"}>
          {lesson?.price ? lesson?.price : "Price"}
        </Grid>
        <Grid item xs={2} px={2} textAlign={"center"}>
          {typeof lesson?.currentSum === "number"
            ? lesson?.currentSum
            : "Total"}
        </Grid>
        <Grid item xs={2} px={2} textAlign={"center"}>
          {!index ? "isPaid" : icon}
        </Grid>
      </Grid>
    </Box>
  );
};

export const LessonsListWrapper = () => {
  const { lessons } = useLessonsContext();
  return (
    <Box boxShadow={"0px 0px 12px #d7ffd3"}>
      <Lesson />
      {!!lessons.length &&
        lessons.map((l, i) => <Lesson key={l.id} index={i + 1} lesson={l} />)}
    </Box>
  );
};
