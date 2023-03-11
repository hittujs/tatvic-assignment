import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  topBar: {
    display: "flex",
    flexDirection: "row",
    flex: "1",
    backgroundColor: "#ede0d4",
  },
  Heading: {
    flexGrow: 1,
    flexBasis: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.primary.light,
    fontSize: "35px",
  },
  links: {
    flexGrow: 1,
    flexBasis: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  linksList: {
    display: "flex",
    flexDirection: "row",
    listStyleType: "none",
  },
  listItem: {
    padding: "5px",
    margin: "5px",
    fontSize: "35px",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.light,
    "&:hover,&:active": {
      textDecoration: "none",
      color: theme.palette.primary.dark,
    },
  },
  user: {
    flexGrow: 1,
    flexBasis: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  userName: {
    fontSize: "35px",
    color: theme.palette.primary.dark,
  },
  button: {
    marginLeft: "10px",
    color: theme.palette.primary.light,
  },
}));
