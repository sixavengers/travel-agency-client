import ReactApexChart from "react-apexcharts";
type Props = {};

const PieChart = (props: Props) => {
  const series = [14, 23, 21, 17, 15, 10, 12, 17, 21];
  const options = {
    chart: {
      type: "polarArea",
    },
    stroke: {
      colors: ["#fff"],
    },
    fill: {
      opacity: 0.8,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div className="bg-white flex items-center justify-center p-5">
      <ReactApexChart
        options={options as any}
        series={series}
        width={500}
        type="polarArea"
      />
    </div>
  );
};

export default PieChart;
