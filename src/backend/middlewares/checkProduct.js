import { NextResponse } from "next/server";

export default function checkProduct(product) {
	return product
		? NextResponse.json(product)
		: NextResponse.json({ message: "Product not found" }, { status: 404 });
}
