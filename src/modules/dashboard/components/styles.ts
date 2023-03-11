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
