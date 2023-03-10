import { useState } from "react";
import { Container, Tab, Tabs } from "@material-ui/core";
import { TabPanel } from "./TabPanel";
import { useStyles } from "./styles";

export const Dashboard = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const styles = useStyles();

  const handleTabChange = (e: any, value: number) => {
    setTabIndex(value);
  };

  return (
    <Container className={styles.dashboardContainer}>
      <Tabs
        value={tabIndex}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        onChange={handleTabChange}
      >
        <Tab value={0} label="Past 7 Days Search Results" />
        <Tab value={1} label="Past 1 Day Search Results" />
        <Tab value={2} label="Past 1 Hour Search Results" />
      </Tabs>
      <TabPanel value={tabIndex} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        Item Three
      </TabPanel>
    </Container>
  );
};
