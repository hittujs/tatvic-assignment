import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";
import { v4 as uuidv4 } from "uuid";

interface Props {
  scoreData: any;
}

const Card = ({ scoreData }: Props) => {
  const styles = useStyles();

  const showDateAndTime = (time: number) => {
    const date = new Date(time).toString();
    return date.split("GMT")[0];
  };

  return (
    <Box className={styles.card}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Keyword</TableCell>
              <TableCell align="center">Number of Hits</TableCell>
              <TableCell align="center">Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scoreData.map((row: any) => (
              <TableRow key={uuidv4()}>
                <TableCell align="center" scope="row">
                  {row.keyword}
                </TableCell>
                <TableCell align="center">{row.numberOfHits}</TableCell>
                <TableCell align="center">
                  {/*  @ts-ignore */}
                  <span>{showDateAndTime(row.time)}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Card;
