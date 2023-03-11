import { Box, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

interface Props {
  scoreData: any;
}

const Card = ({ scoreData }: Props) => {
  const styles = useStyles();
  return (
    <>
      {scoreData.map((keyword: any, index: number) => {
        return (
          <Box className={styles.card} key={index}>
            <Typography className={styles.cardContent} variant="h6">
              {keyword.keyword}
            </Typography>
            <Typography className={styles.cardContent} variant="h6">
              {keyword.numberOfHits}
            </Typography>
            <Typography className={styles.cardContent} variant="h6">
              {keyword.time}
            </Typography>
          </Box>
        );
      })}
    </>
  );
};

export default Card;
