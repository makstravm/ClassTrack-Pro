import { Grid, Paper, Typography } from "@mui/material";
import { useSumContext } from "../context/sumContext";
import { useMemo } from "react";
import { sortObjectKeys } from "../utils/sortObjectKeys";

const textHeader: Record<string, string> = {
  totalSum: "Total spent sum",
  priceForLesson: "Price for lesson",
  currentSum: "Current sum",
};

const HeaderItem = () => {
  const sumInit = useSumContext();
  const sum = useMemo(() => sumInit?.sum || {}, [sumInit]);

  const sortSum = useMemo(() => sortObjectKeys(sum), [sum]);

  const getColor = (par: string) =>
    par === "totalSum" ? "#04d003de" : "#003eff";

  return (
    <>
      {sum &&
        Object.entries(sortSum).map(([name, value]) => (
          <Grid item textAlign="center" key={name}>
            <Typography variant="h6">{textHeader[name]}</Typography>
            <Typography
              component={"span"}
              textAlign={"center"}
              variant="h5"
              fontWeight={"bold"}
              color={getColor(name)}
            >
              {value}
            </Typography>
            <Typography
              component="span"
              textAlign={"center"}
              variant="h5"
              color={"#003eff"}
              pl={1}
            >
              UAH
            </Typography>
          </Grid>
        ))}
    </>
  );
};
export const Header = () => {
  return (
    <Paper elevation={8}>
      <Grid container p={2} justifyContent={"space-between"}>
        <HeaderItem />
        <Grid item>May be Log in/out</Grid>
      </Grid>
    </Paper>
  );
};
