import Chart from "react-google-charts";
import useLast7Days from "../hooks/useLast7Days";

export const SearchChart = () => {
  const { Last7Days } = useLast7Days();
  const days = Last7Days();

  const data = [
    ["Date", "No of keyword search"],
    [new Date(days[6]), 2000 * Math.random()],
    [new Date(days[5]), 2000 * Math.random()],
    [new Date(days[4]), 2000 * Math.random()],
    [new Date(days[3]), 2000 * Math.random()],
    [new Date(days[2]), 2000 * Math.random()],
    [new Date(days[1]), 2000 * Math.random()],
    [new Date(days[0]), 2000 * Math.random()],
  ];

  const options = {
    chartArea: { height: "80%", width: "90%" },
    hAxis: { slantedText: false },
    vAxis: { viewWindow: { min: 0, max: 2000 } },
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
