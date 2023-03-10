import { Box, Container, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useKeywordSearch } from "../hooks/useKeywordSearch";
import { useStyles } from "./styles";

interface Props {
  query: string;
}

export const SearchResultContainer = ({ query }: Props) => {
  const styles = useStyles();
  const { data: searchResult } = useKeywordSearch({ query });
  const navigate = useNavigate();

  const handleResultClick = (title: string) => {
    navigate(`/search/${title}`);
  };

  return (
    <Container className={styles.searchResultContainer}>
      <div>
        {searchResult?.query?.search?.map(
          (record: Record<string, string>, index: number) => {
            return (
              <Box className={styles.recordList} key={record.pageid}>
                <Typography onClick={() => handleResultClick(record.title)}>
                  {record.title}
                </Typography>
              </Box>
            );
          }
        )}
      </div>
    </Container>
  );
};
