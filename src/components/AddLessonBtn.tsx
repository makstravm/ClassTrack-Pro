import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useLessonsContext } from "../context/lessonsContext";

export const AddLessonBtn = () => {
  const { addLesson } = useLessonsContext();

  return (
    <Box textAlign={"center"} py={2}>
      <Button
        onClick={addLesson}
        startIcon={<AddIcon fontSize="small" />}
        variant="outlined"
      >
        Add Lesson
      </Button>
    </Box>
  );
};
