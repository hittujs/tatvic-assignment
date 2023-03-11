import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  authContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    textAlign: "center",
    flexDirection: "row",
    color: "black",
    height: "100vh",
    lineHeight: "28px",
    border: "1px solid red",
  },
  loginText: {
    marginBottom: "10px",
  },
  dashboardContainer: {
    display: "flex",
    width: "100%",
    textAlign: "center",
    flexDirection: "column",
    color: "black",
    height: "99vh",
  },
  tabPanelContent: {
    border: "1px solid black",
    height: "93vh",
  },
  tabList: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "10%",
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    marginRight: "20px",
  },
}));
