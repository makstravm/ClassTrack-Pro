import { useMemo } from "react";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useLessonsContext } from "../context/lessonsContext";
import { Modal } from "./Modal";
import { getCurrentDate } from "../utils/getCurrentDate";
import useModal from "../hooks/useModal";

export const AddLessonBtn = () => {
  const { addLesson, lessons } = useLessonsContext();
  const { show, isVisible, hide } = useModal();
  const date = getCurrentDate();
  const onClick = () => {
    addLesson();
    hide();
  };

  const isDisabled = useMemo(
    () => lessons.find((l) => l.date === date),
    [lessons, date]
  );
  return (
    <Box textAlign={"center"} py={2}>
      <Button
        onClick={show}
        startIcon={<AddIcon fontSize="small" />}
        variant="outlined"
        disabled={!!isDisabled}
      >
        Add Lesson
      </Button>
      <Modal
        title={`Lesson -  ${date}`}
        content={`Do you really want to add a lesson for ${date}?`}
        titleBtnAgree="Add lesson"
        onClick={onClick}
        isVisible={isVisible}
        hide={hide}
      />
    </Box>
  );
};
