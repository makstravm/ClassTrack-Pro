import { Box, Paper, Typography } from "@mui/material";
import { useSumContext } from "../context/sumContext";

type Props = {
  children?: React.ReactNode;
};

export const Main = ({ children }: Props) => {
  const {
    sum: { lastAddFunds },
  } = useSumContext();
  return (
    <>
      <Typography
        variant="h4"
        pt={3}
        fontWeight={700}
        fontStyle={"italic"}
        textAlign={"center"}
        color={"#45194c"}
        style={{ textShadow: "2px -2px 4px #9942a8" }}
      >
        Simple Lessons Counter
      </Typography>
      <Typography variant="body1" py={2} textAlign={"center"} color="#54215c">
        Last the add funds
        <Typography
          component={"span"}
          variant="body1"
          py={2}
          pl={1}
          fontWeight={"bold"}
          textAlign={"center"}
          color="secondary"
        >
          {lastAddFunds}
        </Typography>
      </Typography>
      <Paper elevation={6}>
        <Box p={2}>{children}</Box>
      </Paper>
    </>
  );
};
