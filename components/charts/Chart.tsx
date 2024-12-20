"use client";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  YAxis,
} from "recharts";
import { ChartContainer, ChartTooltipContent } from "../ui/chart";
import { memo, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const Chart: React.FC<{ data: any[] | undefined }> = ({ data }) => {
  const chartConfig = {
    portfolio: {
      label: "Evergreen I",
    },
    gold: {
      label: "Gold (IAUM)",
    },
    commodities: {
      label: "Broad Commodities (PDBC)",
    },
    bonds: {
      label: "Global Bond Market (BNDW)",
    },
    stocks: {
      label: "Global Stock Market (VT)",
    },
  };
  const { minValue, maxValue, ticks } = useMemo(() => {
    if (!data || data.length === 0)
      return { minValue: 0, maxValue: 0, ticks: [] };

    const values = [];
    for (let item of data) {
      values.push(item.portfolio);
      values.push(item.gold);
      values.push(item.bonds);
      values.push(item.commodities);
      values.push(item.stocks);
    }
    const firstValue = values[0];
    const dataMin = Math.min(...values);
    const dataMax = Math.max(...values);

    // Add padding of 10% of the data range
    const padding = (dataMax - dataMin) * 0.1;
    const min = Math.min(firstValue, dataMin - padding);
    const max = Math.max(firstValue, dataMax + padding);

    const tickStep = (max - min) / 4; // Create 5 ticks including min and max
    const autoTicks = [firstValue]; // Start with the first value

    // Add ticks below the first value
    for (let i = firstValue - tickStep; i >= min; i -= tickStep) {
      autoTicks.unshift(Math.round(i * 100) / 100);
    }

    // Add ticks above the first value
    for (let i = firstValue + tickStep; i <= max; i += tickStep) {
      autoTicks.push(Math.round(i * 100) / 100);
    }

    // Ensure min and max are included
    if (autoTicks[0] > min) autoTicks.unshift(Math.round(min * 100) / 100);
    if (autoTicks[autoTicks.length - 1] < max)
      autoTicks.push(Math.round(max * 100) / 100);
    return { minValue: min, maxValue: max, ticks: autoTicks };
  }, [data]);
  const filterBits = useSearchParams().get("filter_bits") || "11111";
  const timeFrame = useSearchParams().get("filter") || "1W";

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this breakpoint as needed
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);
  return (
    <ChartContainer
      config={chartConfig}
      className="aspect-auto h-[150px] sm:h-[350px] w-full"
    >
      <LineChart
        key={timeFrame}
        data={data}
        margin={{
          left: 12,
          right: 12,
        }}
        accessibilityLayer
      >
        <CartesianGrid vertical={false} />

        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          minTickGap={32}
          tickFormatter={(value) => {
            const date = new Date(value);
            return date.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            });
          }}
        />
        <YAxis
          tickFormatter={(val) => {
            if (val >= 1e9) {
              return `$${(val / 1e9).toFixed(3)}B`;
            } else if (val >= 1e6) {
              return `$${(val / 1e6).toFixed(2)}M`;
            } else if (val >= 1e3) {
              return `$${(val / 1e3).toFixed(2)}K`;
            } else {
              return `$${val.toFixed(2)}`;
            }
          }}
          type="number"
          domain={[minValue, maxValue]}
          // interval="preserveStartEnd"
          ticks={ticks}
        />

        <Line
          dataKey="portfolio"
          type="monotone"
          stroke="#369336"
          strokeWidth={2}
          dot={false}
        />
        <Line
          hide={filterBits[1] === "0"}
          dataKey="stocks"
          type="monotone"
          stroke="gray"
          strokeWidth={2}
          dot={false}
        />
        <Line
          hide={filterBits[2] === "0"}
          dataKey="bonds"
          type="monotone"
          stroke="skyblue"
          strokeWidth={2}
          dot={false}
        />

        <Line
          hide={filterBits[3] === "0"}
          dataKey="commodities"
          type="monotone"
          stroke="brown"
          strokeWidth={2}
          dot={false}
        />
        {!isMobile && (
          <Tooltip
            labelFormatter={(value) => {
              return new Date(value).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              });
            }}
            content={<ChartTooltipContent />}
          />
        )}
      </LineChart>
    </ChartContainer>
  );
};

export default memo(Chart);
