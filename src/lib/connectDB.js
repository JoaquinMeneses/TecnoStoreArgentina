import mongoose from "mongoose";
import {
	handlerConnectionState,
	handlerMongoURIValidator,
} from "@/backend/middlewares/mongodbHandlers";

async function connectDB() {
	if (handlerConnectionState()) return "MongoDB already connected";
	try {
		await handlerMongoURIValidator();
		await mongoose.connect(process.env.MONGODB_URI);
		console.log(`MongoDB connected`);
		return Promise.resolve({
			message: "MongoDB connection success",
		});
	} catch (error) {
		console.log(error);
		return Promise.reject(error);
	}
}

export default connectDB;
