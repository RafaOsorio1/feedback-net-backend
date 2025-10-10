import type { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { getAllProductsUseCase } from "../../useCases/products/GetProductsPaginated";

export async function getProductsController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const queryParsed = z
      .object({
        page: z.string().optional(),
        limit: z.string().optional(),
      })
      .safeParse(req.query);

    if (!queryParsed.success) {
      throw new Error(queryParsed.error.message);
    }

    const products = await getAllProductsUseCase({
      page: Number(queryParsed.data.page) || 1,
      limit: Number(queryParsed.data.limit) || 10,
    });

    res.status(200).json({
      status: "ok",
      code: 200,
      data: products,
    });
  } catch (error) {
    next(error);
  }
}
