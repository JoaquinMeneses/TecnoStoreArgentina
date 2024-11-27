import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";

export async function GET(request) {
	await connectDB();
	return new NextResponse({
        message: "Check: /api/product",
        status: 200
    });
}
