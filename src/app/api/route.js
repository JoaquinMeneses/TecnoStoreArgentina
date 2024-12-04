import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";

export async function GET() {
	return NextResponse.json(await connectDB());
}