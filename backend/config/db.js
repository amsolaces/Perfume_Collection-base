import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.error('❌ MONGO_URI is not defined in environment variables');
      console.error('Please create a .env file with MONGO_URI');
      process.exit(1);
    }

    // Remove quotes if present
    const mongoUri = process.env.MONGO_URI.replace(/^["']|["']$/g, '');
    
    console.log('🔄 Connecting to MongoDB...');
    
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
    });
    
    console.log('✅ MongoDB Connected Successfully');
    console.log(`📊 Database: ${mongoose.connection.name}`);
  } catch (error) {
    console.error('❌ DB Connection Error:', error.message);
    
    if (error.name === 'MongoServerSelectionError') {
      console.error('💡 Tips:');
      console.error('   1. Check if your MongoDB Atlas cluster is running');
      console.error('   2. Verify your connection string is correct');
      console.error('   3. Check if your IP is whitelisted in MongoDB Atlas');
      console.error('   4. Ensure your username and password are correct');
    }
    
    process.exit(1);
  }
};

// Handle connection events
mongoose.connection.on('disconnected', () => {
  console.log('⚠️  MongoDB disconnected');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err);
});

export default connectDB;
