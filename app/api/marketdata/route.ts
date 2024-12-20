import { getChartData } from "@/firebase/utils";
import { NextResponse } from "next/server";

export const revalidate = 3600;

export async function GET() {
  const marketData = await getChartData(); //process this data and send it
  if (marketData) {
    marketData.sort((a, b) => (new Date(a.date) <= new Date(b.date) ? -1 : 1));
    const today = new Date(marketData[marketData.length - 1].date);
    const _180Days = new Date(today);
    _180Days.setDate(today.getDate() - 180);
    const _90Days = new Date(today);
    _90Days.setDate(today.getDate() - 90);
    const _30Days = new Date(today);
    _30Days.setDate(today.getDate() - 30);
    const _7Days = new Date(today);
    _7Days.setDate(today.getDate() - 7);
    const _1W = marketData.filter((data) => new Date(data.date) >= _7Days);
    const _1M = marketData.filter((data) => new Date(data.date) >= _30Days);
    const _3M = marketData.filter((data) => new Date(data.date) >= _90Days);
    const _6M = marketData.filter((data) => new Date(data.date) >= _180Days);
    const ALL = marketData;
    return NextResponse.json({
      "1W": _1W,
      "1M": _1M,
      "3M": _3M,
      "6M": _6M,
      ALL: ALL,
    });
  } else {
    return NextResponse.json(
      { error: "Error while fetching data" },
      { status: 500 },
    );
  }
}
