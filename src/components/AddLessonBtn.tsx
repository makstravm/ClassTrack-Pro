import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const AddLessonBtn = () => {
  return (
    <Button startIcon={<AddIcon fontSize="small" />} variant="outlined">
      Add Lesson
    </Button>
  );
};
