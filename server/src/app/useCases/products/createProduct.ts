import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;

    const {
      name, description, price, category, ingredients,
    } = req.body;

    if (!imagePath || !name || !description || !price || !category || !ingredients) {
      return res.status(400).json({
        message: 'Please, provide all required items!',
      });
    }

    const product = await Product.create({
      name,
      description,
      price: Number(price),
      imagePath,
      ingredients: JSON.parse(ingredients),
      category,
    });

    return res.status(200).send(product);
  } catch (error) {
    return res.status(500).json({
      error: 'Internal server error',
      message: error,
    });
  }
}
