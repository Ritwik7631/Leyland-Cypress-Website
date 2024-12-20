import { NextResponse } from "next/server";
export const dynamic = 'force-dynamic'
export async function GET() {
  return NextResponse.json({ health: "ok", date: Date.now() });
}
