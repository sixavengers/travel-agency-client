import Chart from "react-apexcharts";
type Props = {};
const UsersChart = (props: Props) => {
  const options = {
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ];

  return (
    <div className="bg-white p-3 shadow">
      <label htmlFor="" className="my-3">
        Users Visualization
      </label>
      <Chart
        options={options}
        series={series}
        type="bar"
        width={"100%"}
        height={320}
      />
    </div>
  );
};

export default UsersChart;
