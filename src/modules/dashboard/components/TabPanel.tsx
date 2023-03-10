import { Box, Typography } from "@material-ui/core";
import { ReactNode } from "react";
import { useStyles } from "./styles";

interface Props {
  children: ReactNode;
  value: number;
  index: number;
}

export const TabPanel = (props: Props) => {
  const { children, value, index } = props;
  const styles = useStyles();

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
    >
      <Box className={styles.tabPanelContent}>{children}</Box>
    </Typography>
  );
};
