import type { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { createCategoryUseCase } from "../../useCases/categories/create.useCase";

export async function createCategoryController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const bodyParsed = z
      .object({
        name: z.string().min(1),
      })
      .safeParse(req.body);

    if (!bodyParsed.success) {
      res.status(400).json(bodyParsed.error);

      return;
    }

    const result = await createCategoryUseCase(bodyParsed.data.name);

    res.status(201).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    next(error);
  }
}
