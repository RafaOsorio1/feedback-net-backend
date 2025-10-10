"use strict";
// import { NextFunction, Request, Response } from "express";
// import jwt from "jsonwebtoken";
// export async function verifyAuthToken(
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) {
//   const token = req.header("auth-token");
//   if (!token) {
//     return res.status(401).json({
//       status: "error",
//       message: "Unauthorized",
//     });
//   }
//   try {
//     const verified = await jwt.verify(token, process.env.JWT_KEY || "");
//     if (!verified) {
//       return res.status(401).json({
//         status: "error",
//         message: "Unauthorized",
//       });
//     }
//     next();
//   } catch (error) {
//     res.status(401).json({
//       status: "error",
//       message: "Unauthorized",
//     });
//   }
// }
