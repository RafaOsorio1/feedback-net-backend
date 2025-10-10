import { Decimal } from "@prisma/client/runtime/library";
import crypto from "crypto";
import { CreateProduct } from "../../controllers/products/create.controller";
import { databaseManager } from "../../libs/databaseManager";

export async function createProductUseCase(payload: CreateProduct) {
  const database = databaseManager.getDatabase();

  const sku = crypto.randomUUID();

  const result = await database.product.create({
    data: {
      name: payload.name as string,
      description: payload.description as string,
      price: new Decimal(payload.price),
      stock: payload.stock as number,
      sku: sku,
      categoryId: payload.categoryId as string,
    },
  });

  return result;
}
