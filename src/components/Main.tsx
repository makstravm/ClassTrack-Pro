import { Box, Paper, Typography } from "@mui/material";

type Props = {
  children?: React.ReactNode;
};

export const Main = ({ children }: Props) => (
  <>
    <Typography variant="h5" py={3} textAlign={"center"}>
      Simple Lessons Counter
    </Typography>
    <Paper elevation={6}>
      <Box p={2}>{children}</Box>
    </Paper>
  </>
);
