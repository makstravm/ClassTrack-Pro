import { Grid, Paper, Typography } from "@mui/material";
import { useSumContext } from "../context/sumContext";
import { useMemo } from "react";
import { sortObjectKeys } from "../utils/sortObjectKeys";
import { EditPrice } from "./HeaderPrice";

const textHeader: Record<string, string> = {
  totalSum: "Total spent sum",
  priceForLesson: "Price for lesson",
  currentSum: "Current sum",
};

const HeaderItem = () => {
  const { sum } = useSumContext();

  const sortSum = useMemo(() => sortObjectKeys(sum as any), [sum]);
  const isPriceField = (par: string) => par === "priceForLesson";
  const getColor = (par: string) =>
    par === "totalSum" ? "#04d003de" : "#003eff";

  return (
    <>
      {sum &&
        Object.entries(sortSum).map(([name, value]) => {
          if (name !== "lastAddFunds") {
            return (
              <Grid item textAlign="center" key={name}>
                <Typography px={1} variant="h6">
                  {textHeader[name]}
                </Typography>
                {!isPriceField(name) ? (
                  <Typography
                    component={"span"}
                    textAlign={"center"}
                    variant="h5"
                    fontWeight={"bold"}
                    color={getColor(name)}
                  >
                    {value}
                  </Typography>
                ) : (
                  <EditPrice color={getColor(name)} valueDefault={value} />
                )}
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
            );
          }
        })}
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
