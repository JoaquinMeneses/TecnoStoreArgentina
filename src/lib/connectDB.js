import mongoose from "mongoose";

const handlerConnectionState = () =>	{
	return mongoose.connection.readyState === 1;
}

async function connectDB() {
	if (handlerConnectionState()) return	{
		status: 200,
		message: "MongoDB already connected"
	};
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		console.log(`MongoDB connected`);
		return {
			status: 200,
			message: "MongoDB connection success"
		};
	} catch (error) {
		console.error("MongoDB connection error:", error);
		return {
			status: 400,
			message: "MongoDB connection error:" + error
		};
	}
}

export default connectDB;