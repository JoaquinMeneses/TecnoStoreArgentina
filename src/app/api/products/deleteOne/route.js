import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Product from "@/backend/models/Product";

export async function DELETE(request) {
    await connectDB();
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");
    try {
        await Product.findByIdAndDelete(id);
        return NextResponse.json({
            status: 200,
            message: "Product deleted correctly"
        });
    } catch (error) {
        return NextResponse.json({
			status: 400,
			message: "Error deleting product:" + error,
		});
    }
}