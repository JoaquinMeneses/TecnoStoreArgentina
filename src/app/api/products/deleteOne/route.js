import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Product from "@/backend/models/Product";

export async function DELETE(request) {
    await connectDB();
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");
    try {
        await Product.findByIdAndDelete(id);
        return NextResponse.json(
            {
                message: "Product deleted correctly"
            },
            {
                status: 200,
            });
    } catch (error) {
        return NextResponse.json(
            {
                message: "Error deleting product:" + error.message,
            },
            {
                status: 400,
            });
    }
}