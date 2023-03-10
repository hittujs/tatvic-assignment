import { Box, Button, Container, Input, Typography } from "@material-ui/core";
import React, { ChangeEventHandler, useState } from "react";
import { useStyles } from "./styles";

interface Props {
  searchQuery: string;
  handleOnChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onSubmit: (e: any) => void;
}

export const SearchQueryContainer = ({
  searchQuery,
  handleOnChange,
  onSubmit,
}: Props) => {
  const styles = useStyles();

  return (
    <Container className={styles.searchQueryContainer}>
      <Typography> Search any keyword</Typography>

      <form className={styles.form} onSubmit={onSubmit}>
        <Input
          autoFocus
          margin="dense"
          value={searchQuery}
          name="search"
          onChange={handleOnChange}
        />
        <Button
          className={styles.searchButton}
          disabled={!searchQuery}
          type="submit"
          variant="outlined"
          color="primary"
        >
          Search
        </Button>
      </form>
    </Container>
  );
};
