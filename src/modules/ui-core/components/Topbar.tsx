import { Box, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser, logoutUser } from "../../dashboard/redux";
import { useStyles } from "./styles";

export const Topbar = () => {
  const styles = useStyles();
  const user = useSelector(selectLoggedInUser);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectLoggedInUser);

  const signOutUser = () => {
    dispatch(logoutUser());
  };

  return (
    <Box className={styles.topBar}>
      <Typography className={styles.Heading}>Tatvic-Assignment</Typography>
      <Box className={styles.links}>
        <ul className={styles.linksList}>
          <li className={styles.listItem}>
            <Link className={styles.link} to="/">
              Dashboard
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.link} to="/search">
              Search
            </Link>
          </li>
        </ul>
      </Box>
      <Box className={styles.user}>
        <Typography className={styles.userName}>{user?.name}</Typography>
        {isLoggedIn && (
          <Button
            className={styles.button}
            variant="outlined"
            onClick={signOutUser}
          >
            sign out
          </Button>
        )}
      </Box>
    </Box>
  );
};
