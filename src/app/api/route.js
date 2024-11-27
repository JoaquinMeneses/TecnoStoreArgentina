import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";

export async function GET(request) {
	return NextResponse.json(await connectDB());
}