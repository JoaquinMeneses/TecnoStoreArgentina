import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Product from "@/backend/models/Product";

export async function PATCH(request) {
	await connectDB();
	const searchParams = request.nextUrl.searchParams;
	const id = searchParams.get("id");
	try {
		const data = await request.json();
		const updatedProduct = await Product.findByIdAndUpdate(id, data, {
			new: true,
		});
		return NextResponse.json(updatedProduct);
	} catch (error) {
		return NextResponse.json(
			{
				message: "Error updating product:" + error.message,
			},
			{
				status: 400,
			}
		);
	}
}
