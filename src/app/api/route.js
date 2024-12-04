import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";

export async function GET() {
	try {
		return NextResponse.json(await connectDB());
	} catch (error) {
		return NextResponse.json(
			{
				message: error.message
			},
			{
				status: 400
			})
	}
}