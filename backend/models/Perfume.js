import mongoose from 'mongoose';
const perfumeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  imageUrl: String
});
export default mongoose.model('Perfume', perfumeSchema);
