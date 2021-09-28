import { Card, CardContent } from "@mui/material";
import { Line } from "react-chartjs-2";
function CoinChart({ coinChart }) {
  console.log(coinChart);

  const coinPrice = [];
  const coinTimestamp = [];

  coinChart.month.map((e) => {
    coinPrice.push(e[1]);
    coinTimestamp.push(new Date(e[0]).toLocaleDateString());
  });

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    maintainAspectRatio: false,
  };

  return (
    <Card>
      <CardContent style={{ height: "50%", width: "100%" }}>
        <Line data={data} width={360} height={360} options={options} />
      </CardContent>
    </Card>
  );
}

export default CoinChart;
