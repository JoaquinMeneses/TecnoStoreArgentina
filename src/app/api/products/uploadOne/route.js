import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Product from "@/backend/models/Product";

export async function POST(request) {
    await connectDB();
    try {
        const data = await request.json();
        const newProduct = new Product(data);
        const uploadedProduct = await newProduct.save();
        return NextResponse.json(uploadedProduct, {
            status: 200,
            message: "Product uploaded correctly"
        });
    } catch (error) {
        return NextResponse.json({
			status: 400,
			message: "Error uploading product:" + error,
		});
    }
}
