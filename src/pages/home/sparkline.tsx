import React from "react";
import { Line, LineChart } from "recharts";

type Props = {
  data: number[];
  width: number;
  height: number;
};

const CoinmarketcapSparkline: React.FC<Props> = ({ data, width, height }) => {
  // Calculate the maximum and minimum values in the data set
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);

  // Calculate the ratio between the max and min values and the height of the sparkline
  const valueRatio = (maxValue - minValue) / height;

  // Map the data points to points on the sparkline using the value ratio
  const points = data.map((value, index) => ({
    x: index,
    y: height - (value - minValue) / valueRatio,
  }));

  return (
    <LineChart width={width} height={height} data={points}>
      <Line
        type="monotone"
        dataKey="y"
        stroke={"#fff"}
        strokeWidth={1}
        dot={false}
      />
    </LineChart>
  );
};

export default CoinmarketcapSparkline;
