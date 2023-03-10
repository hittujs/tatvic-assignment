import { Box, Button, Container, Input, Typography } from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import { SearchQueryContainer } from "./SearchQueryContainer";
import { SearchResultContainer } from "./SearchResultContainer";
import { useStyles } from "./styles";

export const SearchContainer = () => {
  const styles = useStyles();
  const [searchQuery, setSearchQuery] = useState("");

  console.log(searchQuery, "searchQuery");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(searchQuery, "searchQuery");
  };
  return (
    <Container className={styles.searchContainer}>
      <SearchQueryContainer
        searchQuery={searchQuery}
        handleOnChange={handleOnChange}
        onSubmit={handleOnSubmit}
      />
      <SearchResultContainer />
    </Container>
  );
};
