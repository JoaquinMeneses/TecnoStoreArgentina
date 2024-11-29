import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Product from "@/backend/models/Product";

export async function GET(request) {
	await connectDB();
	try {
		const allProducts = await Product.find();
		return NextResponse.json(allProducts);
	} catch (error) {
        return NextResponse.json({
			status: 404,
			message: "Error finding products:" + error,
		});
    }
}
