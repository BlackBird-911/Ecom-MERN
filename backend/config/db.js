import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // useCreateIndex: true,
        });

        console.log(`connected : ${conn.connection.host}`);
    } catch (error) {
        console.error(`error : ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
