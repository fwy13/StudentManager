"use client";
import { Card, CardContent, CardHeader } from "@mui/material";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

const Chart: React.FC = () => {
  return (
    <Card sx={{ width: 400 }}>
      <CardHeader title="Chart" />
      <CardContent>
        <Line
          data={{
            labels: ["T5", "T6", "T7", "T8", "T9", "T10", "T11"],
            datasets: [
              {
                data: [10, 9, 8, 7, 9, 10, 9],
                backgroundColor: "#9ADE7B",
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      </CardContent>
    </Card>
  );
};

export default Chart;
