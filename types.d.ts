// types.d.ts
interface RiskAdjusted {
  stocks: number;
  gold: number;
  commodities: number;
  portfolio: number;
  bonds: number;
}

interface TotalReturns {
  commodities: number;
  bonds: number;
  portfolio: number;
  gold: number;
  stocks: number;
}

interface MarketDataItem {
  id: string;
  date: string;
  risk_adjusted: RiskAdjusted;
  total_returns: TotalReturns;
}

type TimePeriod = "1W" | "1M" | "3M" | "6M" | "ALL";

interface ChartData extends Record<TimePeriod, Array<MarketDataItem>> {}

