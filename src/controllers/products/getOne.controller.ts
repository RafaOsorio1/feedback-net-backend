import type { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { getOneProductUseCase } from "../../useCases/products/getOne.useCase";

export async function getOneProductController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const id = req.params.id;

    if (!id) {
      throw new Error("id is required");
    }

    const idParsed = z.string().uuid().safeParse(id);

    if (!idParsed.success) {
      throw new Error(idParsed.error.message);
    }

    const product = await getOneProductUseCase(idParsed.data);

    res.status(200).json({
      status: "ok",
      data: product,
    });
  } catch (error) {
    next(error);
  }
}
