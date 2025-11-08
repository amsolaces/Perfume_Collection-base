import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Perfume from '../models/Perfume.js';
import connectDB from '../config/db.js';

dotenv.config();

const samplePerfumes = [
  {
    name: 'Elegant Essence',
    brand: 'Luxury Scents',
    description: 'A sophisticated blend of floral and woody notes that creates an unforgettable fragrance experience.',
    price: 2999,
    imageUrl: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400'
  },
  {
    name: 'Midnight Bloom',
    brand: 'Night Fragrances',
    description: 'A mysterious and captivating scent perfect for evening wear. Notes of jasmine and vanilla.',
    price: 3499,
    imageUrl: 'https://images.unsplash.com/photo-1595425970377-c97073e5bc1a?w=400'
  },
  {
    name: 'Ocean Breeze',
    brand: 'Fresh Scents',
    description: 'A refreshing aquatic fragrance that captures the essence of the ocean. Light and invigorating.',
    price: 2499,
    imageUrl: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400'
  },
  {
    name: 'Royal Oud',
    brand: 'Premium Collection',
    description: 'An exotic and luxurious fragrance featuring rare oud wood and amber. For the discerning nose.',
    price: 4999,
    imageUrl: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400'
  },
  {
    name: 'Citrus Splash',
    brand: 'Fresh Scents',
    description: 'A vibrant and energizing blend of citrus fruits. Perfect for daytime wear.',
    price: 1999,
    imageUrl: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400'
  },
  {
    name: 'Rose Garden',
    brand: 'Floral Collection',
    description: 'A romantic and feminine fragrance with notes of fresh roses and peony.',
    price: 2799,
    imageUrl: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400'
  }
];

const seedDatabase = async () => {
  try {
    await connectDB();
    
    // Clear existing perfumes
    await Perfume.deleteMany({});
    console.log('Cleared existing perfumes');
    
    // Insert sample perfumes
    const insertedPerfumes = await Perfume.insertMany(samplePerfumes);
    console.log(`✅ Successfully seeded ${insertedPerfumes.length} perfumes`);
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();

