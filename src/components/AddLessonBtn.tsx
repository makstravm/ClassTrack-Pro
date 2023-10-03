import { useMemo, useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useLessonsContext } from "../context/lessonsContext";
import { Modal } from "./Modal";
import { getCurrentDate } from "../utils/getCurrentDate";
import useModal from "../hooks/useModal";
import { MyDatePicker } from "./DatePicker";

export const AddLessonBtn = () => {
  const { addLesson, lessons } = useLessonsContext();
  const [date, setDate] = useState<string>("");
  const { show, isVisible, hide } = useModal();
  const currentDate = useMemo(() => getCurrentDate(), []);
  const handleOnClick = () => {
    addLesson(date);
    hide();
  };

  useEffect(() => {
    setDate(currentDate);
  }, [currentDate]);

  const isDisabled = useMemo(
    () => lessons.find((l) => l.date === currentDate),
    [lessons, currentDate]
  );

  return (
    <Box textAlign={"center"} py={2}>
      <Button
        color="secondary"
        onClick={show}
        startIcon={<AddIcon fontSize="small" />}
        variant="outlined"
        disabled={!!isDisabled}
      >
        Add Lesson
      </Button>
      <Modal
        title={`Lesson -  #${lessons.length + 1}`}
        titleBtnAgree="Add lesson"
        onClick={handleOnClick}
        isVisible={isVisible}
        hide={hide}
      >
        <Box display={"flex"} alignItems={"center"}>
          <Typography component={"span"} pr={2}>
            Do you really want to add a lesson for
          </Typography>
          <Box
            width={200}
            display={"flex"}
            alignItems={"center"}
            flexWrap="nowrap"
          >
            <MyDatePicker onChangeDate={setDate} />
            <Typography component={"span"} pl={1}>
              ?
            </Typography>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
