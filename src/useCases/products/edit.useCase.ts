import { Product } from "@prisma/client";
import { databaseManager } from "../../libs/databaseManager";

export async function editProductUseCase(id: string, data: Partial<Product>) {
  const database = databaseManager.getDatabase();

  await database.product.update({
    where: {
      id,
    },
    data: {
      name: data.name,
      description: data.description,
      price: data.price,
      stock: data.stock,
      updatedAt: new Date(),
    },
  });

  const result = await database.product.findUnique({
    where: {
      id,
    },
  });

  return result;
}
