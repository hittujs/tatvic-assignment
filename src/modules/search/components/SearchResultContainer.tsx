import {
  Box,
  CircularProgress,
  Container,
  Typography,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useKeywordSearch } from "../hooks/useKeywordSearch";
import { useStyles } from "./styles";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface Props {
  query: string;
}

export const SearchResultContainer = ({ query }: Props) => {
  const styles = useStyles();
  const { data: searchResult } = useKeywordSearch({ query });
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 1000);
  }, []);

  const handleResultClick = (title: string) => {
    navigate(`/search/${title}`);
  };

  if (showLoader) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  if (!searchResult?.query?.searchinfo?.totalhits) {
    return <Typography>Please search for another keyword</Typography>;
  }

  return (
    <Container className={styles.searchResultContainer}>
      <div>
        {searchResult?.query?.search?.map((record: Record<string, string>) => {
          return (
            <Box className={styles.recordList} key={uuidv4()}>
              <Typography onClick={() => handleResultClick(record.title)}>
                {record.title}
              </Typography>
            </Box>
          );
        })}
      </div>
    </Container>
  );
};
