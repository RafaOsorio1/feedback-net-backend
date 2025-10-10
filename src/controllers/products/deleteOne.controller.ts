import type { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { deleteOneProductUseCase } from "../../useCases/products/deleteOne.useCase";

export async function deleteOneProductController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const id = req.params.id;

    const idParsed = z.string().uuid().safeParse(id);

    if (!idParsed.success) {
      throw new Error(idParsed.error.message);
    }

    const product = await deleteOneProductUseCase(id);

    res.status(200).json({
      status: "ok",
      data: product,
    });
  } catch (error) {
    next(error);
  }
}
