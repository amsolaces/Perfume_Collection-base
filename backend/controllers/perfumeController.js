import Perfume from '../models/Perfume.js';

export const getPerfumes = async (req, res) => {
  try {
    const perfumes = await Perfume.find();
    res.json(perfumes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch perfumes', message: error.message });
  }
};

export const addPerfume = async (req, res) => {
  try {
    const perfume = new Perfume(req.body);
    const result = await perfume.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: 'Failed to add perfume', message: error.message });
  }
};
