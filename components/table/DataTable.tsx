"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { useEffect, useState } from "react";
import axios from "axios";
import DataTableSkeleton from "../skeletons/DataTableSkeleton";
import { Card } from "../ui/card";

const DataTable = () => {
  const [data, setData] = useState<Record<
    string,
    Record<string, number>
  > | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    async function getData() {
      try {
        setLoading(() => true);

        const res = await axios.get<Record<
          string,
          Record<string, number>
        > | null>("/api/tabledata");

        const data = res.data;
        setData(data);
      } catch (e) {
        console.error("error occured while fetching metric table data");
        setData(null);
      } finally {
        setLoading(() => false);
      }
    }
    getData();
  }, []);
  if (loading) return <DataTableSkeleton />;
  if (!data) return null;
  return (
    <>
      <header>
        <h2 className="text-4xl my-5 font-bold ">
          <span>Metrics </span>
        </h2>
      </header>
      <Card className="p-2 sm:container bg-white">
        <Table>
          <TableCaption>
            <p className="mb-4 text-center italic text-xs text-gray-500">
              Past performance is not indicative of future performance.
            </p>
          </TableCaption>
          <TableHeader>
            <TableRow className="group">
              <TableHead></TableHead>

              <TableHead className="bg-green-100 group-hover:bg-green-200">
                Evergreen
              </TableHead>
              <TableHead>Global Stock Market</TableHead>
              <TableHead>Global Bond Market</TableHead>
              <TableHead>Broad Commodities</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="group">
              <TableCell className="font-semibold">
                <HoverCell heading="Annualized Return" desc="TBD" />
              </TableCell>
              <TableCell className="bg-green-100 group-hover:bg-green-200">
                {data["Annualized Return"]["evergreen"]}%
              </TableCell>
              <TableCell>{data["Annualized Return"]["stocks"]}%</TableCell>
              <TableCell>{data["Annualized Return"]["bonds"]}%</TableCell>
              <TableCell>{data["Annualized Return"]["commodities"]}%</TableCell>
            </TableRow>
            <EmptyRow />

            {[
              { heading: "1W", desc: "TBD" },
              { heading: "1M", desc: "TBD" },
              { heading: "3M", desc: "TBD" },
              { heading: "6M", desc: "TBD" },
            ].map((item) => (
              <TableRow key={"row" + item.heading} className="group">
                <TableCell className="font-semibold">
                  <HoverCell {...item} />
                </TableCell>
                <TableCell className="bg-green-100 group-hover:bg-green-200">
                  {data[item.heading]["evergreen"]}%
                </TableCell>
                <TableCell>{data[item.heading]["stocks"]}%</TableCell>
                <TableCell>{data[item.heading]["bonds"]}%</TableCell>
                <TableCell>{data[item.heading]["commodities"]}%</TableCell>
              </TableRow>
            ))}

            <EmptyRow />

            <TableRow className="group">
              <TableCell className="font-semibold">
                <HoverCell heading="Since Inception" desc="TBD" />
              </TableCell>
              <TableCell className="bg-green-100 group-hover:bg-green-200">
                {data["Since Inception"]["evergreen"].toFixed(2)}%
              </TableCell>
              <TableCell>
                {data["Since Inception"]["stocks"].toFixed(2)}%
              </TableCell>
              <TableCell>
                {data["Since Inception"]["bonds"].toFixed(2)}%
              </TableCell>
              <TableCell>
                {data["Since Inception"]["commodities"].toFixed(2)}%
              </TableCell>
              <TableCell>
              </TableCell>
            </TableRow>

            <EmptyRow />

            {[
              { heading: "Largest Daily Gain", desc: "TBD" },
              { heading: "Largest Daily Loss", desc: "TBD" },
              { heading: "Daily Win Rate", desc: "TBD" },
            ].map((item) => (
              <TableRow key={"tablecell" + item.heading} className="group">
                <TableCell className="font-semibold">
                  <HoverCell {...item} />
                </TableCell>
                <TableCell className="bg-green-100 group-hover:bg-green-200">
                  {data[item.heading]["evergreen"].toFixed(2)}%
                </TableCell>
                <TableCell>
                  {data[item.heading]["stocks"].toFixed(2)}%
                </TableCell>
                <TableCell>{data[item.heading]["bonds"].toFixed(2)}%</TableCell>
                <TableCell>
                  {data[item.heading]["commodities"].toFixed(2)}%
                </TableCell>
              </TableRow>
            ))}

            <EmptyRow />

            {[
              { heading: "Annualized Volatility", desc: "TBD" },
              { heading: "Sharpe Ratio", desc: "TBD" },
              { heading: "Sortino Ratio", desc: "TBD" },
              { heading: "Max Drawdown", desc: "TBD" },
              { heading: "Equity Correlation", desc: "TBD" },
              { heading: "Beta", desc: "TBD" },
            ].map((item) => (
              <TableRow key={"tablecell" + item.heading} className="group">
                <TableCell className="font-semibold">
                  <HoverCell {...item} />
                </TableCell>

                <TableCell className="bg-green-100 group-hover:bg-green-200">
                  {data[item.heading]["evergreen"].toFixed(2) +
                    (["Annualized Volatility", "Max Drawdown"].includes(
                      item.heading
                    )
                      ? "%"
                      : "")}
                </TableCell>
                <TableCell>
                  {data[item.heading]["stocks"].toFixed(2) +
                    (["Annualized Volatility", "Max Drawdown"].includes(
                      item.heading
                    )
                      ? "%"
                      : "")}
                </TableCell>
                <TableCell>
                  {data[item.heading]["bonds"].toFixed(2) +
                    (["Annualized Volatility", "Max Drawdown"].includes(
                      item.heading
                    )
                      ? "%"
                      : "")}
                </TableCell>
                <TableCell>
                  {data[item.heading]["commodities"].toFixed(2) +
                    (["Annualized Volatility", "Max Drawdown"].includes(
                      item.heading
                    )
                      ? "%"
                      : "")}
                </TableCell>
                
              </TableRow>
            ))}

            <EmptyRow />

            {[
              { heading: "Skew", desc: "TBD" },
              { heading: "Kurtosis", desc: "TBD" },
            ].map((item) => (
              <TableRow key={"tablecell" + item.heading} className="group">
                <TableCell className="font-semibold">
                  <HoverCell {...item} />
                </TableCell>
                <TableCell className="bg-green-100 group-hover:bg-green-200">
                  {data[item.heading]["evergreen"].toFixed(2)}
                </TableCell>
                <TableCell>{data[item.heading]["stocks"].toFixed(2)}</TableCell>
                <TableCell>{data[item.heading]["bonds"].toFixed(2)}</TableCell>
                <TableCell>
                  {data[item.heading]["commodities"].toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  );
};

export default DataTable;

const EmptyRow = () => {
  return (
    <TableRow>
      <TableCell></TableCell>
      <TableCell className="bg-green-100 group-hover:bg-green-200"></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
    </TableRow>
  );
};

const HoverCell: React.FC<{ heading: string; desc: string }> = ({
  heading,
  desc,
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger className=" cursor-pointer hover:underline">
        {heading}:
      </HoverCardTrigger>{" "}
      <HoverCardContent>{desc}</HoverCardContent>
    </HoverCard>
  );
};
