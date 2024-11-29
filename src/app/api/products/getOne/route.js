import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Product from "@/backend/models/Product";

export async function GET(request) {
    await connectDB();
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");
    try {
        const product = await Product.findById(id);
        return NextResponse.json(product);
    } catch (error) {
        return NextResponse.json({
			status: 404,
			message: "Error finding product:" + error,
		});
    }
}