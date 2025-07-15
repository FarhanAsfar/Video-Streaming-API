import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();


const connectDB = async() => {
    try {
        console.log(process.env.MONGODB_URI);
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
        
        console.log(`MongoDB Connected...HOST:${connectionInstance.connection.host}`);
    } catch (error) {
        console.error('MongoDB connection failed', error);
        process.exit(1);
    }
}


export {connectDB};