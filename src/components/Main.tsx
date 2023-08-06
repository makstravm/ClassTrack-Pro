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
      <Typography variant="h5" pt={3} textAlign={"center"}>
        Simple Lessons Counter
      </Typography>
      <Typography variant="body1" py={2} textAlign={"center"} color="#11219c">
        Simple Lessons Counter{" "}
        <Typography
          component={"span"}
          variant="body1"
          py={2}
          pl={1}
          fontWeight={"bold"}
          textAlign={"center"}
          color="#00a6d2"
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
