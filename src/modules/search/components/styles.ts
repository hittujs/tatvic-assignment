import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  searchContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  searchQueryContainer: {
    border: "1px solid red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "25vh",
    flexDirection: "column",
  },
  searchResultContainer: {
    border: "1px solid green",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "74vh",
    flexDirection: "column",
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  searchButton: {
    marginTop: "10px",
  },
}));
