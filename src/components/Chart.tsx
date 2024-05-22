"use client";
import { Card, CardContent, CardHeader } from "@mui/material";

import Data from "../../DB/Fake_Information.json";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
);

const Chart: React.FC = () => {
    return (
        <Card sx={{ width: 400 }}>
            <CardHeader title="Biểu đồ điểm" />
            <CardContent>
                <Line
                    data={{
                        labels: ["T1", "T2", "T3", "T4", "T5", "T6", "T7"],
                        datasets: [
                            {
                                data: [10, 9, 8.5, 9.5, 9, 10, 9],
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
