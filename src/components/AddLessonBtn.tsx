import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useSumContext } from "../context/sumContext";
import { getCurrentDate } from "../utils/getCurrentDate";
import { addLesson, getLesson } from "../api/lessons";

export const AddLessonBtn = () => {
  const {
    sum: { priceForLesson, currentSum },
  } = useSumContext();

  const onAddLesson = () => {
    const lesson = {
      date: getCurrentDate(),
      lastSum: currentSum - priceForLesson,
    };
    console.log(lesson);
    addLesson(lesson);
  };

  const onGetLesson = () => {
    getLesson();
  };
  return (
    <div>
      <Button
        onClick={onAddLesson}
        startIcon={<AddIcon fontSize="small" />}
        variant="outlined"
      >
        Add Lesson
      </Button>
      <Button
        onClick={onGetLesson}
        startIcon={<AddIcon fontSize="small" />}
        variant="outlined"
      >
        aaaaaaaaaaa Lesson
      </Button>
    </div>
  );
};
