import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { createProductUseCase } from "../../useCases/products/create.usecase";

export const CreateProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  stock: z.number(),
  categoryId: z.string(),
});

export type CreateProduct = z.infer<typeof CreateProductSchema>;

export async function createProductController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const payload = req.body;

    const parsed = CreateProductSchema.safeParse(payload);

    if (!parsed.success) {
      throw new Error(parsed.error.message);
    }

    const result = await createProductUseCase(parsed.data);

    res.status(201).json({
      status: "ok",
      data: result,
    });
  } catch (error) {
    next(error);
  }
}
