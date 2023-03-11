import { useState } from "react";
import { Container, Tab, Tabs } from "@material-ui/core";
import { TabPanel } from "./TabPanel";
import { useStyles } from "./styles";
import ScoreCard from "./ScoreCard";
import { SearchChart } from "./Chart";

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
        className={styles.tabList}
      >
        <Tab value={0} label="Past 7 Days " />
        <Tab value={1} label="Past 1 Day " />
        <Tab value={2} label="Past 1 Hour " />
        <Tab value={3} label="Search Result Charts" />
      </Tabs>
      <TabPanel value={tabIndex} index={0}>
        <ScoreCard startTime={7 * 86400000} />
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <ScoreCard startTime={1 * 86400000} />
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        <ScoreCard startTime={3600000} />
      </TabPanel>
      <TabPanel value={tabIndex} index={3}>
        <SearchChart />
      </TabPanel>
    </Container>
  );
};
