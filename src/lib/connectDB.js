import mongoose from "mongoose";

const handlerConnectionState = () =>	{
	return mongoose.connection.readyState === 1;
}

async function connectDB() {
	if (handlerConnectionState()) return	{
		message: "MongoDB already connected",
		status: 200
	};
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		console.log(`MongoDB connected`);
		return {
			message: "MongoDB connection success",
			status: 200
		};
	} catch (error) {
		console.error("MongoDB connection error:", error);
		return {
			message: "MongoDB connection error:" + error,
			status: 400
		};
	}
}

export default connectDB;