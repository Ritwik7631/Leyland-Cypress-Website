"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Chart from "./Chart";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import axios from "axios";
import { toast } from "sonner";
import { legend } from "./data";
import Legend from "./Legend";
import ComparisionChartSkeleton from "../skeletons/ComparisionChartSkeleton";

export function ComparisionChart() {
  const MIN_PRICE = 50000;
  const MAX_PRICE = 1000000000;
  const router = useRouter();
  const searchParams = useSearchParams();
  const filters = ["1W", "1M", "3M", "6M", "ALL"];

  let filter: TimePeriod = (searchParams.get("filter") || "1W") as TimePeriod;
  let chartType = searchParams.get("chart_type") || "total_returns";
  let price = Number(searchParams.get("price")) || MIN_PRICE;
  if (price < MIN_PRICE) {
    price = MIN_PRICE;
  }
  let filterBits = searchParams.get("filter_bits") || "1".repeat(legend.length);
  if (filterBits.length >= legend.length) {
    filterBits = "1".repeat(legend.length);
  }
  const [data, setData] = useState<ChartData | null>(null);
  const priceInput = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const activeChart = useMemo(() => {
    if (data === null) return undefined;
    if (data) {
      const prevDate = new Date(data[filter][0].date);
      prevDate.setDate(prevDate.getDate() - 1);

      const newData = [
        {
          date: prevDate.toLocaleDateString("en-US"),
          portfolio: price,
          stocks: price,
          gold: price,
          bonds: price,
          commodities: price,
        },
      ];
      if (chartType === "total_returns") {
        let prev = newData[0];
        data[filter].forEach((i) => {
          newData.push({
            date: i.date,
            portfolio:
              prev.portfolio +
              (i.total_returns.portfolio * prev.portfolio) / 100,
            stocks: prev.stocks + (i.total_returns.stocks * prev.stocks) / 100,
            gold: prev.gold + (i.total_returns.gold * prev.gold) / 100,
            bonds: prev.bonds + (i.total_returns.bonds * prev.bonds) / 100,
            commodities:
              prev.commodities +
              (i.total_returns.commodities * prev.commodities) / 100,
          });
          prev = newData[newData.length - 1];
        });

        return newData;
      } else {
        let prev = newData[0];
        data[filter].forEach((i) => {
          newData.push({
            date: i.date,
            portfolio:
              prev.portfolio +
              (i.risk_adjusted.portfolio * prev.portfolio) / 100,
            stocks: prev.stocks + (i.risk_adjusted.stocks * prev.stocks) / 100,
            gold: prev.gold + (i.risk_adjusted.gold * prev.gold) / 100,
            bonds: prev.bonds + (i.risk_adjusted.bonds * prev.bonds) / 100,
            commodities:
              prev.commodities +
              (i.risk_adjusted.commodities * prev.commodities) / 100,
          });
          prev = newData[newData.length - 1];
        });

        return newData;
      }
    }
  }, [filter, data, chartType, price]);

  const calculatedReturns = useMemo(() => {
    if (!activeChart) return { total: "0", percent: "0" };

    const initial = price;
    const final = activeChart[activeChart.length - 1].portfolio;
    const returns = (final - initial) / initial;
    const finalPrice = (price * (1 + returns)).toFixed(2);
    return {
      total: Number(finalPrice).toLocaleString(),
      percent: (returns * 100).toFixed(2),
    };
  }, [price, activeChart]);
  const transformIntoDigits = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "");
    return digitsOnly;
  };
  const handleFilterChange = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(key, value);

      router.push(`/?${params.toString()}`, {
        scroll: false,
      });
    },
    [router, searchParams]
  );
  useEffect(() => {
    async function getData() {
      try {
        setLoading(() => true);
        const res = await axios.get<ChartData | null>("/api/marketdata");
        // const res: { data: ChartData | null } = marketData;

        const data = res.data;
        setData(data);
        console.log(data);
      } catch (e) {
        console.error("error occured while fetching chart data");
        setData(null);
      } finally {
        setLoading(() => false);
      }
    }
    getData();
  }, []);

  if (loading) return <ComparisionChartSkeleton />;
  if (!data) return null;
  return (
    <>
      <header>
        <h2 className="text-4xl my-5 font-bold ">
          <span>Interactive Graph </span>
        </h2>
      </header>
      <div className="flex flex-col lg:flex-row gap-10 justify-between">
        <Card className="w-full">
          <Tabs
            defaultValue={
              chartType === "risk_adjusted" ? "Risk Adjusted" : "Total Returns"
            }
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger
                onClick={(e) => {
                  handleFilterChange("chart_type", "total_returns");
                }}
                value="Total Returns"
              >
                Performance
              </TabsTrigger>
              <TabsTrigger
                onClick={(e) => {
                  handleFilterChange("chart_type", "risk_adjusted");
                }}
                value="Risk Adjusted"
              >
                Risk-Adjusted
              </TabsTrigger>
            </TabsList>
            <TabsContent value="Total Returns">
              <CardHeader>
                <h2 className="text-2xl font-bold">Performance</h2>
                <div className="flex flex-wrap gap-2 w-full items-center">
                  <p className="text-lg text-gray-500 ">
                    ${calculatedReturns.total}
                  </p>
                  <p
                    className={cn(
                      "text-accent-primary font-semibold",
                      Number(calculatedReturns.percent) < 0 && "text-red-700"
                    )}
                  >
                    ({Number(calculatedReturns.percent) < 0 ? "↓" : "↑"}
                    {calculatedReturns.percent}%)
                  </p>
                </div>
              </CardHeader>
              <CardContent className="p-2">
                <Chart data={activeChart} />
              </CardContent>
            </TabsContent>

            <TabsContent value="Risk Adjusted">
              <CardHeader>
                <h2 className="text-2xl font-bold">
                  Risk-Adjusted Performance
                </h2>
                <div className="flex flex-wrap gap-2 w-full items-center">
                  <p className="text-lg text-gray-500 ">
                    ${calculatedReturns.total}
                  </p>
                  <p
                    className={cn(
                      "text-accent-primary font-semibold",
                      Number(calculatedReturns.percent) < 0 && "text-red-700"
                    )}
                  >
                    ({Number(calculatedReturns.percent) < 0 ? "↓" : "↑"}
                    {calculatedReturns.percent}%)
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <Chart data={activeChart} />
              </CardContent>
            </TabsContent>
          </Tabs>
          <CardFooter className="flex flex-col">
            <div className="flex max-md:flex-col w-full gap-5 items-center ">
              <div className="flex flex-wrap gap-5 items-end">
                <div>
                  <Label htmlFor="price">Initial Amount: </Label>
                  <Input
                    ref={priceInput}
                    id="price"
                    type="text"
                    defaultValue={"$" + price.toLocaleString()}
                    enterKeyHint="search"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        // Manually trigger the blur event
                        if (priceInput != null && priceInput.current) {
                          priceInput.current.blur();
                        }
                      }
                    }}
                    onBlur={(e) => {
                      const initValue = Number(
                        transformIntoDigits(e.target.value)
                      );
                      if (initValue < MIN_PRICE) {
                        handleFilterChange("price", MIN_PRICE.toString());
                        e.target.value = "$" + MIN_PRICE.toLocaleString();
                        toast.warning(
                          `Price should not be less than $${MIN_PRICE.toLocaleString()}`
                        );
                      } else if (initValue > MAX_PRICE) {
                        e.target.value = "$" + MIN_PRICE.toLocaleString();
                        handleFilterChange("price", MIN_PRICE.toString());

                        toast.warning(
                          `Price should not be more than $${MAX_PRICE.toLocaleString()}`
                        );
                      } else {
                        handleFilterChange("price", initValue.toString());
                        e.target.value = "$" + initValue.toLocaleString();
                      }
                    }}
                  />
                </div>
              </div>
              <div className="w-full flex items-center justify-center md:justify-end gap-1 md:gap-5">
                {filters.map((item) => (
                  <Button
                    key={item}
                    className="bg-accent-primary max-md:text-xs hover:bg-accent-primary/80 disabled:cursor-not-allowed shadow-md"
                    disabled={filter === item}
                    onClick={(e) => {
                      handleFilterChange("filter", item);
                      calculatedReturns;
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex my-5 flex-col sm:flex-row flex-wrap w-full sm:items-center sm:justify-center sm:gap-5">
              <Legend handleFilterChange={handleFilterChange} />
            </div>
          </CardFooter>
          <p className="mb-4 text-center italic text-xs text-gray-500">
            Past performance is not indicative of future performance.
          </p>
        </Card>
      </div>
    </>
  );
}
