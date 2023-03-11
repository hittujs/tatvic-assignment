import Chart from "react-google-charts";
import useLast7Days from "../hooks/useLast7Days";
import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { keywordsCollection } from "../../../lib/controller";

export const SearchChart = () => {
  const { Last7Days, dateRange } = useLast7Days();
  const days = Last7Days();
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    onSnapshot(keywordsCollection, (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      //   @ts-ignore
      setKeywords(data);
    });
  }, []);

  const filterDataByRange = (data: any, startTime: number, endTime: number) => {
    const dataDays = Object.values(data);
    return dataDays.filter(
      // @ts-ignore
      (record) =>
        // @ts-ignore
        record?.time > startTime &&
        // @ts-ignore
        record?.time < endTime
    ).length;
  };

  const data = [
    ["Date", "No of keyword search"],
    [
      new Date(days[6]),
      filterDataByRange(keywords, dateRange[0], dateRange[1]),
    ],
    [
      new Date(days[5]),
      filterDataByRange(keywords, dateRange[1], dateRange[2]),
    ],
    [
      new Date(days[4]),
      filterDataByRange(keywords, dateRange[2], dateRange[3]),
    ],
    [
      new Date(days[3]),
      filterDataByRange(keywords, dateRange[3], dateRange[4]),
    ],
    [
      new Date(days[2]),
      filterDataByRange(keywords, dateRange[4], dateRange[5]),
    ],
    [
      new Date(days[1]),
      filterDataByRange(keywords, dateRange[5], dateRange[6]),
    ],
    [new Date(days[0]), filterDataByRange(keywords, dateRange[6], Date.now())],
  ];

  const options = {
    chartArea: { height: "80%", width: "90%" },
    hAxis: { slantedText: false },
    vAxis: { viewWindow: { min: 0, max: 40 } },
    legend: { position: "none" },
  };

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="600px"
      data={data}
      options={options}
      chartPackages={["corechart", "controls"]}
      controls={[
        {
          controlType: "ChartRangeFilter",
          options: {
            filterColumnIndex: 0,
            ui: {
              chartType: "LineChart",
              chartOptions: {
                chartArea: { width: "90%", height: "50%" },
                hAxis: { baselineColor: "none" },
              },
            },
          },
          controlPosition: "bottom",
          controlWrapperParams: {
            state: {
              range: {
                start: new Date(days[6]),
                end: new Date(days[0]),
              },
            },
          },
        },
      ]}
    />
  );
};
