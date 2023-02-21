import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function createCategory(req: Request, res: Response) {
  try {
    const { icon, name } = req.body;

    if (!icon || !name) {
      return res.status(400).json({
        message: 'Please, provide all required items!',
      });
    }

    const category = await Category.create({ icon, name });

    return res.status(201).json(category);
  } catch (error) {
    return res.status(500).json({
      error: 'Internal server error',
      message: error,
    });
  }
}
