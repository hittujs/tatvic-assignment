import { Box, Container, Typography } from "@material-ui/core";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser, isUserLoggedIn, loginUser } from "../redux";
import { useStyles } from "./styles";
import { Dashboard } from "./Dashboard";
import { getClientId } from "config";

const DashboardContainer = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const isLoggedIn = useSelector(isUserLoggedIn);

  function handleCallback(res: any) {
    const user = jwt_decode(res.credential);

    // @ts-ignore
    const { email, name, picture } = user;
    dispatch(loginUser({ email, name, picture }));
  }

  useEffect(() => {
    // @ts-ignore
    google.accounts.id.initialize({
      client_id: getClientId(),
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

export default DashboardContainer;
