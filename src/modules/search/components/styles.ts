import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  searchContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  searchQueryContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "25vh",
    flexDirection: "column",
  },
  searchResultContainer: {
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
  searchHeading: {
    margin: "10px",
  },
  recordList: {
    borderRadius: "2px",
    padding: "5px",
    cursor: "pointer",
    "&:hover,&:focus": {
      backgroundColor: "lightgray",
    },
  },
}));
