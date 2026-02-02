import mongoose from 'mongoose';

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING || 'mongodb://localhost:27017/food_recipe');
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}

export default connectDb;