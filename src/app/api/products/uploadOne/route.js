import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Product from "@/backend/models/Product";

export async function POST(request) {
    await connectDB();
    try {
        const data = await request.json();
        const newProduct = new Product(data);
        const uploadedProduct = await newProduct.save();
        return NextResponse.json(uploadedProduct,
            {
                message: "Product uploaded correctly"
            },
            {
                status: 200,
            });
    } catch (error) {
        return NextResponse.json(
            {
                message: "Error uploading product:" + error.message,
            },
            {
                status: 400,
            });
    }
}
