import { Box, Button, Container, Input, Typography } from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import { SearchQueryContainer } from "./SearchQueryContainer";
import { SearchResultContainer } from "./SearchResultContainer";
import { useStyles } from "./styles";

export const SearchContainer = () => {
  const styles = useStyles();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    clearSearchQuery();
    setSearchQuery(e.target.value);
  };

  const clearSearchQuery = () => {
    setSearchKeyword("");
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSearchKeyword(searchQuery);
  };
  return (
    <Container className={styles.searchContainer}>
      <SearchQueryContainer
        searchQuery={searchQuery}
        handleOnChange={handleOnChange}
        onSubmit={handleOnSubmit}
      />
      {searchKeyword.length > 0 && (
        <SearchResultContainer query={searchQuery} />
      )}
    </Container>
  );
};
