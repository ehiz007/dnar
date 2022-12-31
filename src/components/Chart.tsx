import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import dayjs from "dayjs";
import { useAppSelector } from "../hooks";
import { getHistoricalData } from "../hooks/requests";
import { TrendingDown, TrendingUp } from "@mui/icons-material";

interface ChartData {
  uv: number;
  date: number | string;
  month: number | string;
}
interface CustomTooltip {
  active: boolean;
  payload: any;
  label: string;
}

let convertCurrency: any = (value: number) =>
  new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);

const CustomTooltip: any = ({ active, payload, label }: CustomTooltip) => {
  if (active && payload && payload.length) {
    return (
      <Card sx={{ backgroundColor: "#2C64BC", color: "#fff" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14, textAlign: "center" }} gutterBottom>
            {convertCurrency(payload[0].value)}
          </Typography>
          <Typography sx={{ fontSize: 12, textAlign: "center" }}>
            {payload[0].payload.date}
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return null;
};

export default function App() {
  const coinInfo = useAppSelector(({ crypto }) => crypto.getCoin);
  const [data, setData] = useState<Array<ChartData>>([]);

  useEffect(() => {
    getHistoricalData(coinInfo.id)
      .then((data) => {
        let chartData: ChartData[] = data.prices.map((value: any) => ({
          date: dayjs(value[0]).format("D MMMM, YYYY"),
          uv: value[1],
          // roundedValue: value[1]
          month: dayjs(value[0]).format("MMM"),
        }));
        setData(chartData);
      })
      .catch((err) => {
        return true;
      });
  }, [coinInfo.id]);

  return (
    <Box
      sx={{
        backgroundColor: "#251F2B",
        mt: 4,
        borderRadius: 3,
        px: 3,
        pt: 2,
        pb: -1,
        overflow: "auto",
        "&::-webkit-scrollbar": {
          width: 0,
        },
        scrollbarWidth: "none",
        "&-ms-overflow-style": "none",
      }}
    >
      <Box sx={{ pb: 2, display: "flex", alignItems: "center" }}>
        <Typography variant="h5" sx={{ mr: 5 }}>
          {coinInfo.market_data.current_price
            ? convertCurrency(coinInfo.market_data.current_price["usd"])
            : ""}
        </Typography>
        <Typography
          sx={{
            mr: 2,
            color: `${
              coinInfo.market_data.price_change_percentage_24h > 0
                ? "green"
                : "red"
            }`,
          }}
        >
          {coinInfo.market_data.price_change_percentage_24h.toFixed(2)}%
        </Typography>
        {coinInfo.market_data.price_change_percentage_24h > 0 ? (
          <TrendingUp sx={{ color: "green" }} />
        ) : (
          <TrendingDown sx={{ color: "red" }} />
        )}
      </Box>
      <LineChart
        width={1000}
        height={275}
        data={data}
        margin={{ top: 5, right: 30, left: 10, bottom: 10 }}
      >
        <CartesianGrid vertical={false} strokeDasharray="1 7" />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          interval={29}
          dy={15}
          padding={{ right: 50 }}
        />
        <YAxis dx={-15} tickLine={false} axisLine={false} />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#2C64BC"
          dot={false}
          strokeWidth={2}
        />
      </LineChart>
    </Box>
  );
}
