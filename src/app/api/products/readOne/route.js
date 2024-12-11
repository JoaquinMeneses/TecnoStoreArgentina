import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Product from "@/backend/models/Product";
import checkProduct from "@/backend/middlewares/checkProduct";

export async function GET(request) {
    await connectDB();
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");
    try {
        const product = await Product.findById(id);
        return checkProduct(product);
    } catch (error) {
        return NextResponse.json(
            {
                message: "Error finding product:" + error.message,
            },
            {
                status: 404,
            });
    }
}
