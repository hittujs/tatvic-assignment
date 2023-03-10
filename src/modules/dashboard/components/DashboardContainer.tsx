import { Box, Container, Tab, Tabs, Typography } from "@material-ui/core";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser, isUserLoggedIn, loginUser } from "../redux";
import { useStyles } from "./styles";
import { Dashboard } from "./Dashboard";

export const DashboardContainer = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const isLoggedIn = useSelector(isUserLoggedIn);

  function handleCallback(res: any) {
    const user = jwt_decode(res.credential);
    console.log(user, "user cred auth");
    // @ts-ignore
    const { email, name, picture } = user;
    dispatch(loginUser({ email, name, picture }));
  }

  useEffect(() => {
    // @ts-ignore
    google.accounts.id.initialize({
      client_id:
        "1085632692071-pgrrgnea45a3hua290slfjf7o6hohehm.apps.googleusercontent.com",
      callback: handleCallback,
    });
    // @ts-ignore
    google.accounts.id.renderButton(document.getElementById("signIn"), {
      theme: "outline",
      size: "large",
    });
  });

  return (
    <>
      {!isLoggedIn ? (
        <Container className={styles.authContainer}>
          <Box>
            <Typography className={styles.loginText}>
              Please Login to Continue
            </Typography>
            <div id="signIn"></div>
          </Box>
        </Container>
      ) : (
        <Dashboard />
      )}
    </>
  );
};
