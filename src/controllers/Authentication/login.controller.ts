import type { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { loginUserUseCase } from "../../useCases/users/login.useCase";

const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function loginController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    console.log("request body", req.body);
    const validationResult = loginSchema.safeParse(req.body);

    if (!validationResult.success) {
      throw new Error(validationResult.error.message);
    }

    const credentials = validationResult.data;

    const loginResult = await loginUserUseCase(credentials);

    res
      .cookie("access_token", loginResult.token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 1000 * 60 * 60,
      })
      .status(200)
      .json({
        status: "success",
        code: 200,
        data: loginResult,
      });
  } catch (error) {
    next(error);
  }
}
