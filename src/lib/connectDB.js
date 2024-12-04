import mongoose from "mongoose";

const handlerConnectionState = () => {
	return mongoose.connection.readyState === 1;
}

const handlerMongoURIValidator = async () => {
	const MONGODB_URI = process.env.MONGODB_URI;
	if (!MONGODB_URI) {
		throw new Error("MongoDB URI not found.");
	}
}

async function connectDB() {
	if (handlerConnectionState()) return "MongoDB already connected";
	try {
		await handlerMongoURIValidator();
		await mongoose.connect(process.env.MONGODB_URI);
		console.log(`MongoDB connected`);
		return Promise.resolve(
			{
				message: "MongoDB connection success"
			}
		);
	} catch (error) {
		console.log(error);
		return Promise.reject(error);
	}
}

export default connectDB;