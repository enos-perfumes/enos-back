import { Request, Response } from 'express';
import { Perfume } from '../models/perfume.model';

export const getPerfumes = async (req: Request, res: Response) => {
  try {
    const perfumes = await Perfume.find();
    res.json(perfumes);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch perfumes' });
  }
};

export const createPerfume = async (req: Request, res: Response) => {
  try {
    const perfume = new Perfume(req.body);
    await perfume.save();
    res.status(201).json(perfume);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create perfume' });
  }
};

export const deletePerfume = async (req: Request, res: Response) => {
  try {
    await Perfume.findByIdAndDelete(req.params.id);
    res.json({ message: 'Perfume deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete perfume' });
  }
};
