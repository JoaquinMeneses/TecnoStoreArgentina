import mongoose from "mongoose";

export function handlerConnectionState() {
    return mongoose.connection.readyState === 1;
}

export async function handlerMongoURIValidator() {
    if (!process.env.MONGODB_URI) {
		throw new Error("MongoDB URI not found.");
	}
}