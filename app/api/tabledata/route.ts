import { getTableData } from "@/firebase/utils";
import { NextResponse } from "next/server";
export const revalidate = 3600;
export async function GET() {
  const tableData = await getTableData(); //process this data and send it
  if (tableData) return NextResponse.json(tableData);
  else {
    return NextResponse.json(
      { error: "Error while fetching data" },
      { status: 500 },
    );
  }
}
