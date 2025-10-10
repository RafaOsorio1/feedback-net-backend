import type { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { createImages } from "../../useCases/images/create.useCase";

export async function imagesController(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    if (!req.files || (Array.isArray(req.files) && req.files.length === 0)) {
      res.status(400).json({ message: "No files uploaded" });
      return;
    }

    const queryParsed = z
      .object({
        productId: z.string(),
      })
      .safeParse(req.query);

    if (!queryParsed.success) {
      res.status(400).json({ message: "Missing productId" });
      return;
    }

    const files = Array.isArray(req.files) ? req.files : [req.files];
    const fileUrls = files.map((file) => file.path);

    await createImages({
      imageURLs: fileUrls as string[],
      productId: queryParsed.data.productId,
    });

    res.json({
      status: "ok",
      data: fileUrls,
    });
  } catch (error) {
    next(error);
  }
}
